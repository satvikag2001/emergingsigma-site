// Builds what the document library needs at runtime, before `npm run dev` and
// `npm run build`:
//
// 1. Checks that lib/resources.ts and public/docs/ agree: every PDF has exactly
//    one catalog entry and every entry has its PDF. Any mismatch stops the build
//    with the file named, so a document can never be listed without its file or
//    published without its entry.
// 2. Extracts each page's text with pdfjs-dist, the same library the on-site
//    viewer uses, and writes it to public/search/index.json for full-text search:
//      { "docs": { "<id>": ["page 1 text", "page 2 text", ...] } }
//    The text is joined the way the viewer's find joins it, so what search
//    counted is what the viewer highlights. Devanagari is dropped: the Hindi half
//    of the gazette PDFs uses legacy font encodings and extracts garbled, which
//    would only produce false matches; letters outside Latin and Greek go too
//    (some of those fonts map to CJK code points). The viewer still shows it.
// 3. Copies the PDF.js worker, character maps, standard fonts and decoders to
//    public/pdfjs/, so the viewer loads nothing from a CDN.
//
// Both outputs are build artefacts and stay out of git. Extraction is skipped
// when the index is newer than every PDF and this script, so `npm run dev`
// starts quickly; delete public/search/ to force a rebuild.
import { constants as fsc } from "node:fs";
import { access, cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { CATEGORIES, RESOURCES } from "../lib/resources.ts";

const ROOT = path.join(import.meta.dirname, "..");
const DOCS = path.join(ROOT, "public", "docs");
const INDEX = path.join(ROOT, "public", "search", "index.json");
const PDFJS_OUT = path.join(ROOT, "public", "pdfjs");
const PDFJS = path.join(ROOT, "node_modules", "pdfjs-dist");
const CONCURRENCY = 4;

function fail(message) {
  console.error(`\ndocument library: ${message}\n`);
  process.exit(1);
}

const mtime = (file) =>
  stat(file).then(
    (s) => s.mtimeMs,
    () => 0,
  );

// ---- 1. Catalog and files agree ----------------------------------------------

const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id).filter((id) => id !== "all"));
const KINDS = new Set(["notification", "guidance", "circular", "checklist", "reference"]);
const problems = [];
const ids = new Set();
const pageTitles = new Set();
for (const r of RESOURCES) {
  const where = `lib/resources.ts entry "${r.id}"`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.id ?? ""))
    problems.push(`${where}: id must be lower-case letters, digits and hyphens`);
  if (ids.has(r.id)) problems.push(`${where}: id is used by two entries`);
  ids.add(r.id);
  if (!r.title?.trim()) problems.push(`${where}: title is empty`);
  if (r.date !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(r.date))
    problems.push(`${where}: date must be YYYY-MM-DD`);
  if (!CATEGORY_IDS.has(r.category)) problems.push(`${where}: unknown category "${r.category}"`);
  if (!KINDS.has(r.kind)) problems.push(`${where}: unknown kind "${r.kind}"`);
  if (r.status !== "final" && r.status !== "draft")
    problems.push(`${where}: status must be "final" or "draft"`);
  // The document page's <title> is built from these two, and must be unique.
  const pageTitle = `${r.title} ${r.number ?? ""}`;
  if (pageTitles.has(pageTitle))
    problems.push(`${where}: another entry has the same title and number`);
  pageTitles.add(pageTitle);
}

const files = (await readdir(DOCS)).filter((f) => f.toLowerCase().endsWith(".pdf"));
const fileIds = new Set(files.map((f) => f.slice(0, -4)));
for (const f of files) {
  if (!f.endsWith(".pdf")) problems.push(`public/docs/${f}: use a lower-case .pdf extension`);
  else if (!ids.has(f.slice(0, -4)))
    problems.push(`public/docs/${f} has no entry in lib/resources.ts`);
}
for (const id of ids) {
  if (!fileIds.has(id))
    problems.push(`lib/resources.ts entry "${id}" has no file public/docs/${id}.pdf`);
}
if (problems.length) fail(`catalog and files disagree:\n  - ${problems.join("\n  - ")}`);

// ---- 2. Full-text index ------------------------------------------------------

/** Mirrors how the viewer's find controller prepares a page, then tidies for search. */
function pageText(items) {
  let raw = "";
  for (const item of items) {
    raw += item.str;
    if (item.hasEOL) raw += "\n";
  }
  return (
    raw
      .normalize("NFKC") // ligatures (ﬁ), full-width forms
      // Anything outside Latin, Greek and the shared digits and punctuation: the
      // Hindi half, whose legacy fonts extract as Devanagari or as unrelated
      // CJK, Balinese and Sundanese code points.
      .replace(/[^\p{Script=Latin}\p{Script=Greek}\p{Script=Common}\p{Script=Inherited}\s]+/gu, " ")
      .replace(/[\u0964\u0965\u1CD0-\u1CFF]+/g, " ") // danda and Vedic signs, filed under Common
      .normalize("NFD")
      .replace(/\p{M}+/gu, "") // accents, as the viewer's find ignores them
      .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
      .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
      .replace(/\u2010/g, "-")
      // A word hyphenated at a line end is joined back; a hyphen that belongs
      // (MD-\n14) stays and only the line break goes.
      .replace(/(\p{Ll})-\n(?=\p{Ll})/gu, "$1")
      .replace(/(\p{Lu})-\n(?=\p{L})/gu, "$1")
      .replace(/(\S-)\n/g, "$1")
      .replace(/[\u00AD\u200B-\u200D\u2060\uFEFF]/g, "") // soft hyphen, zero-width
      .replace(/[\p{Cc}\p{Co}\uFFFD\u2028\u2029]/gu, " ") // control, private use
      .replace(/\s+/g, " ")
      .trim()
  );
}

async function extract(id) {
  const data = new Uint8Array(await readFile(path.join(DOCS, `${id}.pdf`)));
  const task = getDocument({
    data,
    cMapUrl: path.join(PDFJS, "cmaps") + path.sep,
    cMapPacked: true,
    standardFontDataUrl: path.join(PDFJS, "standard_fonts") + path.sep,
    useSystemFonts: false,
    disableFontFace: true,
    verbosity: 0,
  });
  const doc = await task.promise;
  try {
    const pages = [];
    for (let n = 1; n <= doc.numPages; n++) {
      const page = await doc.getPage(n);
      const { items } = await page.getTextContent({ disableNormalization: true });
      pages.push(pageText(items));
      page.cleanup();
    }
    return pages;
  } finally {
    await task.destroy();
  }
}

async function indexIsCurrent() {
  const built = await mtime(INDEX);
  if (!built) return false;
  const inputs = [import.meta.filename, ...files.map((f) => path.join(DOCS, f))];
  for (const f of inputs) if ((await mtime(f)) > built) return false;
  try {
    const { docs } = JSON.parse(await readFile(INDEX, "utf8"));
    const have = Object.keys(docs);
    return have.length === ids.size && have.every((id) => ids.has(id));
  } catch {
    return false;
  }
}

if (await indexIsCurrent()) {
  console.log(`search index: up to date (${ids.size} documents)`);
} else {
  const started = Date.now();
  const sorted = [...ids].sort();
  const docs = {};
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < sorted.length) {
        const id = sorted[next++];
        try {
          docs[id] = await extract(id);
        } catch (err) {
          fail(`could not read public/docs/${id}.pdf: ${err.message}`);
        }
      }
    }),
  );

  const empty = sorted.filter((id) => !docs[id].some((t) => t.length > 0));
  if (empty.length) {
    fail(
      `no extractable text in: ${empty.map((id) => `public/docs/${id}.pdf`).join(", ")}.\n` +
        "  These look like scanned images; full-text search needs a text layer (run OCR first).",
    );
  }

  const ordered = Object.fromEntries(sorted.map((id) => [id, docs[id]]));
  const json = JSON.stringify({ docs: ordered });
  await mkdir(path.dirname(INDEX), { recursive: true });
  await writeFile(INDEX, json);
  const pages = sorted.reduce((n, id) => n + docs[id].length, 0);
  const kb = (n) => `${Math.round(n / 1024)} KB`;
  console.log(
    `search index: ${sorted.length} documents, ${pages} pages, ${kb(json.length)} ` +
      `(${kb(gzipSync(json, { level: 9 }).length)} gzipped) in ${((Date.now() - started) / 1000).toFixed(1)} s`,
  );
}

// ---- 3. PDF.js runtime files ---------------------------------------------------

const { version } = JSON.parse(await readFile(path.join(PDFJS, "package.json"), "utf8"));
const stamp = path.join(PDFJS_OUT, "VERSION");
const current = await readFile(stamp, "utf8").catch(() => "");
if (current.trim() === version) {
  console.log(`pdf.js files: up to date (${version})`);
} else {
  await rm(PDFJS_OUT, { recursive: true, force: true });
  await mkdir(PDFJS_OUT, { recursive: true });
  await cp(
    path.join(PDFJS, "build", "pdf.worker.min.mjs"),
    path.join(PDFJS_OUT, "pdf.worker.min.mjs"),
  );
  for (const dir of ["cmaps", "standard_fonts", "wasm", "iccs"]) {
    const src = path.join(PDFJS, dir);
    const exists = await access(src, fsc.R_OK).then(
      () => true,
      () => false,
    );
    if (exists) await cp(src, path.join(PDFJS_OUT, dir), { recursive: true });
  }
  await writeFile(stamp, `${version}\n`);
  console.log(`pdf.js files: copied ${version} to public/pdfjs/`);
}
