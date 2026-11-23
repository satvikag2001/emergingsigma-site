/* Full-text search over the document library.

   Pure on purpose: no React, no DOM and no imports, so `node --test` loads it as
   it is. The document viewer's find controller calls viewerMatches() from here
   too, so a document page highlights exactly what the search results counted.

   Matching rules (SPEC.md, Assumption 5): case-insensitive; partial words match
   ("calibrat" finds "calibration"); text in double quotes is one phrase; a query
   of several words lists pages with every word first and pages with only some
   of them separately; words shorter than MIN_TERM_LENGTH are ignored. */

/** Shorter words are ignored: a single letter matches almost every page. */
export const MIN_TERM_LENGTH = 2;

/** One thing to look for: a word, or a phrase typed in double quotes. */
export type Term = { text: string; phrase: boolean; pattern: RegExp };

/** Where a term occurs in a page's text: [start, end) and which term it was. */
export type Occurrence = { start: number; end: number; term: number };

export type Range = { start: number; end: number };

/** One document as search sees it. `pages` is empty when the index failed to load. */
export type SearchDoc = { id: string; catalog: string; pages: readonly string[] };

/** A page with matches. `page` counts from 1; `terms` is how many distinct terms it has. */
export type PageHit = { page: number; occurrences: Occurrence[]; terms: number };

export type DocHit = {
  id: string;
  /** How many of the query's terms appear in the number, title or keywords. */
  catalogTerms: number;
  /** Total occurrences across `pages`. */
  count: number;
  pages: PageHit[];
};

export type SearchResult = {
  terms: Term[];
  /** Documents with pages that contain every term. */
  full: DocHit[];
  /** Documents with pages that contain only some of the terms (several-word queries). */
  partial: DocHit[];
  matches: number;
  pages: number;
  partialPages: number;
};

export type Snippet = {
  text: string;
  /** Text was cut off before / after the snippet. */
  lead: boolean;
  trail: boolean;
  /** Highlight ranges within `text`, sorted and not overlapping. */
  marks: [number, number][];
};

// Typographic quotes from phone keyboards count as straight ones.
const QUOTES = /[\u201C\u201D\u201E\u201F\u00AB\u00BB]/g;
const TOKEN = /"([^"]*)"|([^\s"]+)/g;
// Sentence punctuation stuck to a word is dropped; dots, brackets and hyphens are
// kept because they are part of references like G.S.R. 78(E) and MD-14.
const EDGE_PUNCT = /^[,;:!?'\u2018\u2019]+|[,;:!?'\u2018\u2019]+$/g;
const DASH = /[-\u2010\u2011\u2012\u2013\u2014\u2212]/;
const DASH_CLASS = "[-\\u2010\\u2011\\u2012\\u2013\\u2014\\u2212]";
const WORD_CHAR = /[\p{L}\p{N}]/u;
const SPACE_RUN = /(?:\\s[*+])+/g;

function escapeChar(ch: string): string {
  return ch.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&");
}

/**
 * Builds the pattern for one term. Spaces typed in the query match any run of
 * whitespace, and whitespace is optional next to punctuation, so "78(E)" finds
 * "78 (E)", "G.S.R." finds "G. S. R." and "MD-14" finds "MD – 14".
 */
export function compileTerm(text: string): RegExp {
  let src = "";
  for (const ch of text) {
    if (/\s/.test(ch)) src += "\\s+";
    else if (DASH.test(ch)) src += `\\s*${DASH_CLASS}\\s*`;
    else if (WORD_CHAR.test(ch)) src += escapeChar(ch);
    else src += `\\s*${escapeChar(ch)}\\s*`;
  }
  // A run next to punctuation stays optional even if the visitor typed a space.
  src = src.replace(SPACE_RUN, (run) => (run.includes("\\s*") ? "\\s*" : "\\s+"));
  src = src.replace(/^\\s[*+]/, "").replace(/\\s[*+]$/, "");
  return new RegExp(src, "gi");
}

/** Splits a query into terms, in the order typed, without duplicates. */
export function parseQuery(query: string): Term[] {
  const terms: Term[] = [];
  const seen = new Set<string>();
  const add = (raw: string) => {
    const text = raw
      .normalize("NFD")
      .replace(/\p{M}+/gu, "") // accents are ignored, as in the index and the viewer
      .replace(/\s+/g, " ")
      .trim()
      .replace(EDGE_PUNCT, "")
      .toLowerCase();
    if (text.length < MIN_TERM_LENGTH || seen.has(text)) return;
    seen.add(text);
    terms.push({ text, phrase: text.includes(" "), pattern: compileTerm(text) });
  };
  for (const m of query.replace(QUOTES, '"').matchAll(TOKEN)) add(m[1] ?? m[2]);
  return terms;
}

/** Every occurrence of every term in `text`, sorted by position. */
export function findOccurrences(terms: readonly Term[], text: string): Occurrence[] {
  const out: Occurrence[] = [];
  terms.forEach((t, term) => {
    for (const m of text.matchAll(t.pattern)) {
      if (m[0].length) out.push({ start: m.index, end: m.index + m[0].length, term });
    }
  });
  return out.sort((a, b) => a.start - b.start || b.end - a.end);
}

/** Joins overlapping or touching ranges, e.g. where "class" and "class c" overlap. */
export function mergeRanges(ranges: readonly Range[]): Range[] {
  const sorted = [...ranges].sort((a, b) => a.start - b.start || b.end - a.end);
  const out: Range[] = [];
  for (const r of sorted) {
    const last = out[out.length - 1];
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end);
    else out.push({ start: r.start, end: r.end });
  }
  return out;
}

function sumCounts(pages: readonly PageHit[]): number {
  return pages.reduce((n, p) => n + p.occurrences.length, 0);
}

/**
 * Searches every page of every document. Returns null when the query has no
 * usable terms. `docs` arrive in catalog order (newest first), which breaks ties.
 */
export function search(docs: readonly SearchDoc[], query: string): SearchResult | null {
  const terms = parseQuery(query);
  if (terms.length === 0) return null;

  const full: DocHit[] = [];
  const partial: DocHit[] = [];
  for (const doc of docs) {
    const catalogTerms = terms.filter((t) => doc.catalog.search(t.pattern) !== -1).length;
    const fullPages: PageHit[] = [];
    const somePages: PageHit[] = [];
    doc.pages.forEach((text, i) => {
      const occurrences = findOccurrences(terms, text);
      if (occurrences.length === 0) return;
      const found = new Set(occurrences.map((o) => o.term)).size;
      (found === terms.length ? fullPages : somePages).push({
        page: i + 1,
        occurrences,
        terms: found,
      });
    });
    if (fullPages.length > 0 || catalogTerms === terms.length) {
      full.push({ id: doc.id, catalogTerms, count: sumCounts(fullPages), pages: fullPages });
    }
    if (somePages.length > 0) {
      partial.push({ id: doc.id, catalogTerms, count: sumCounts(somePages), pages: somePages });
    }
  }

  const order = new Map(docs.map((d, i) => [d.id, i]));
  const mostTerms = (d: DocHit) => Math.max(0, ...d.pages.map((p) => p.terms));
  full.sort(
    (a, b) =>
      b.catalogTerms - a.catalogTerms || b.count - a.count || order.get(a.id)! - order.get(b.id)!,
  );
  partial.sort(
    (a, b) =>
      b.catalogTerms - a.catalogTerms ||
      mostTerms(b) - mostTerms(a) ||
      b.count - a.count ||
      order.get(a.id)! - order.get(b.id)!,
  );

  return {
    terms,
    full,
    partial,
    matches: full.reduce((n, d) => n + d.count, 0),
    pages: full.reduce((n, d) => n + d.pages.length, 0),
    partialPages: partial.reduce((n, d) => n + d.pages.length, 0),
  };
}

/**
 * Cuts a page's text into snippets, one per occurrence, with `context`
 * characters either side. Occurrences close together share a snippet as long as
 * it stays within `maxLength`. Edges are moved to whole words.
 */
export function makeSnippets(
  text: string,
  occurrences: readonly Range[],
  context = 60,
  maxLength = 240,
): Snippet[] {
  const ranges = mergeRanges(occurrences);
  const out: Snippet[] = [];
  let i = 0;
  while (i < ranges.length) {
    const marks = [ranges[i]];
    let start = Math.max(0, ranges[i].start - context);
    let end = Math.min(text.length, ranges[i].end + context);
    i++;
    while (i < ranges.length) {
      const nextEnd = Math.min(text.length, ranges[i].end + context);
      if (ranges[i].start - context > end || nextEnd - start > maxLength) break;
      marks.push(ranges[i]);
      end = nextEnd;
      i++;
    }
    if (start > 0 && text[start - 1] !== " ") {
      const sp = text.indexOf(" ", start);
      if (sp !== -1 && sp < marks[0].start) start = sp + 1;
    }
    if (end < text.length && text[end] !== " ") {
      const sp = text.lastIndexOf(" ", end);
      if (sp >= marks[marks.length - 1].end) end = sp;
    }
    out.push({
      text: text.slice(start, end),
      lead: start > 0,
      trail: end < text.length,
      marks: marks.map((m) => [m.start - start, m.end - start]),
    });
  }
  return out;
}

let lastViewerQuery = "";
let lastViewerTerms: Term[] = [];

/**
 * For the PDF viewer's find controller: every occurrence of every term in one
 * page's text, merged where they overlap, in the { index, length } form it uses.
 */
export function viewerMatches(query: string, text: string): { index: number; length: number }[] {
  if (query !== lastViewerQuery) {
    lastViewerQuery = query;
    lastViewerTerms = parseQuery(query);
  }
  return mergeRanges(findOccurrences(lastViewerTerms, text)).map((r) => ({
    index: r.start,
    length: r.end - r.start,
  }));
}

/** Reads `#q=...&page=...` style fragments. Values are decoded; missing keys are absent. */
export function readFragment(hash: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of new URLSearchParams(hash.replace(/^#/, ""))) out[k] = v;
  return out;
}

/** Builds a fragment from the non-empty values, e.g. "#q=form%20md-14&page=3"; "" if none. */
export function buildFragment(params: Record<string, string | number | undefined>): string {
  const parts = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`);
  return parts.length ? `#${parts.join("&")}` : "";
}
