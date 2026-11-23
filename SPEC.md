# Spec: Regulatory Document Library — V1

Status: approved by the owner and implemented on 2026-11-22, on the branch
`document-library`. Not merged to `main` or deployed: the drafted titles and new wording
await the owner's review (see "Ask first").

## Objective

Turn `/resources` into a working library of 57 regulatory documents that visitors can
browse, read on the site, and search in full text.

Today `/resources` lists 12 placeholder entries whose download links go nowhere (`href: "#"`).
`documents.zip` holds 57 real PDFs: Indian medical device notifications published in the
Gazette of India (G.S.R. and S.O. numbers, final and draft), CDSCO guidance and circulars,
an application checklist, and one US tariff chapter. The audience is regulatory and quality
staff at medical device companies, who are Emerging Sigma's prospective clients. A useful,
searchable library is a reason to visit and to trust the firm.

Mix of documents: 32 final notifications, 20 draft notifications, 3 guidance/circular
documents, 1 checklist, 1 reference (the US tariff chapter). About 59 MB and 646 pages in
total, 1 to 250 pages each.

### User stories

1. A visitor on `/resources` sees all 57 documents, newest first, each with its number, date,
   title and whether it is final or a draft, and can filter by category and type.
2. A visitor types any word or phrase (`Form MD-14`, `sterilisation`, `744`, `shall`) and sees
   every place it appears: every document, every page and every occurrence, each with the
   passage around it and the term highlighted.
3. A visitor clicks a result and lands on that document's page, which shows the original PDF
   open at the matching page with every match highlighted, and can step through the matches.
4. A visitor can open or download the original PDF file from the list, the search results
   and the document page.
5. Each document has its own shareable URL that search engines can index.

### Decisions already made (with the owner)

- The library **replaces** the list on `/resources`. The 12 placeholder entries are removed.
- The **original PDFs** are published unchanged, and every search result leads to the
  original document.
- PDFs are shown in a **viewer embedded in the site** (PDF.js), opened at the matching page
  with the search term highlighted.
- Titles are **hand-written**: Claude drafts all 57 from the documents, and the owner reviews
  them before release.
- **No one-line summaries.** If a summary or any other descriptive text turns out to be needed
  anywhere, its wording is approved by the owner before it is used.
- **Search is exhaustive.** Any word can be searched (no stop-word list, no fixed vocabulary),
  and results show every occurrence in every document. Nothing is capped or hidden.
- **V2 goal: spelling tolerance and intent.** Search should eventually find misspelled terms
  and understand what the visitor means, not only the exact words typed. Not in V1.
- **Every filter is shown, including ones with no documents yet.** The existing region
  filters stay (CDSCO / India, EU MDR / IVDR, US FDA, ISO Standards, General / Other) and a
  type filter is added next to them. Options with no documents show a count of 0 (see A2).
- The **US tariff chapter is kept**, as kind "reference" under General / Other.
- **Search covers English text only** in V1. The Hindi half of each gazette notification uses
  legacy font encodings, so its text extracts garbled (प्राधिकार से प्रकाशित comes out as
  प्राजधकार से प्रकाजित). Indexing it would produce misses and false matches. The Hindi
  text is still visible in the viewer.
- **`documents.zip` is added to `.gitignore`** once the PDFs are in `public/docs/`. The local
  copy is kept.

### Assumptions (correct any of these before approval)

1. *(Moved to decisions: English-only search.)*
2. **PDFs are committed to the repo** under `public/docs/` (61 MB; GitHub allows 100 MB per
   file and 1 GB per Pages site). No Git LFS. `documents.zip` itself is not committed.
3. **Everything runs in the visitor's browser.** No search service, no new third-party
   requests, nothing stored on the visitor's device. This keeps the privacy policy and the
   cookieless analytics setup accurate as written.
4. **No login.** The library is public.
5. **Matching rules:**
   - Case-insensitive. Any word, number or reference can be searched, including common words.
   - Partial words match anywhere in a word, as in a browser's find (`calibrat` finds
     `calibration`; `form` also finds `informed`).
   - Text in `"double quotes"` must match as an exact phrase.
   - **Several words:** pages that contain every word are listed first. Pages that contain
     only some of the words follow in a separate "partial matches" section, so every word
     typed is found. Every occurrence of every word is highlighted.
   - Words shorter than 2 characters are ignored, since a single letter matches almost
     every page. To find `Class C`, put it in double quotes.
   - Spacing next to punctuation is flexible, so `78(E)` finds `78 (E)` and `MD-14` finds
     `MD - 14`; accents are ignored.
   - No typo tolerance in V1 (see the V2 goal).

## Tech Stack

- Unchanged: Next.js 16.4.0 (App Router, `output: "export"`), React 19.3.0, TypeScript
  7.0.2, served as static files by GitHub Pages, built by `.github/workflows/deploy.yml`.
- **New dependency: `pdfjs-dist`**, pinned to an exact version (6.5.438 is current at time of
  writing). Used in two places:
  - at build time, in Node, to extract each page's text into the search index;
  - in the browser, to render the viewer (`PDFViewer`, `PDFFindController`, `PDFLinkService`,
    `EventBus` from `pdfjs-dist/legacy/web/pdf_viewer.mjs`).

  Using the same library for both means the text the index matched is the text the
  viewer highlights.

  Both uses take PDF.js's `legacy` build. Its default build runs only on the latest Chrome
  and Firefox; the legacy build is the one PDF.js supports on Chrome and Edge 125+, Safari
  18+ and Firefox ESR (browsers from about mid-2024). That is newer than the rest of the
  site needs (Chrome, Edge and Firefox 111+, Safari 16.4+), so on older browsers the viewer
  falls back as C6 describes. The list, filters and search do not use PDF.js and work
  everywhere the site does. Verified in Chromium 148 and Firefox 150; Safari is untested.
- **Search:** hand-written, no search library. The English text of all 57 PDFs is about 1 MB
  (about 265 KB gzipped), small enough to scan in full on each query.
- **Tests:** Node's built-in runner (`node --test`), loading `.ts` files through Node 24's
  built-in type stripping. No new test dependency. For this, `package.json` declares
  `"type": "module"` and Node 22.18 or newer, and `tsconfig.json` allows `.ts` import paths.

## Commands

```
npm install                          # after pdfjs-dist is added
npm run dev                          # predev builds images + document index; http://localhost:3000
npm run build                        # prebuild builds images + document index; writes out/
npm start                            # serves out/ at http://localhost:3000
npm test                             # node --test "lib/**/*.test.ts"          (new)
node scripts/build-doc-index.mjs     # rebuild only the search index           (new)
npm run format                       # Prettier
```

`predev` and `prebuild` become
`node scripts/build-images.mjs && node scripts/build-doc-index.mjs`.

Environment note: in this WSL checkout, Linux Node (v24.21.0) is installed user-locally at
`~/.local/node`; prepend `~/.local/node/bin` to `PATH`. The Windows npm on `PATH` does not work
with Linux paths. CI runs Node 24 on `ubuntu-latest`.

## Project Structure

```
public/docs/<id>.pdf             The 57 original PDFs, byte-identical to documents.zip (committed)
lib/resources.ts                 Hand-written catalog, one entry per PDF (entries and type replaced;
                                 CATEGORIES kept, KINDS added)
.gitignore                       Adds documents.zip, public/search/, public/pdfjs/
lib/resources.test.ts            Unit tests for the catalog: filters, counts, sorting, page titles
lib/search.ts                    Pure search logic: parse query, match pages, rank, build snippets
lib/search.test.ts               Unit tests for lib/search.ts
scripts/build-doc-index.mjs      PDF -> per-page English text -> public/search/index.json;
                                 copies the PDF.js worker, cMaps and fonts to public/pdfjs/;
                                 fails the build if catalog and files disagree
public/search/index.json         Generated each build (gitignored)
public/pdfjs/                    Generated each build (gitignored)
app/resources/page.tsx           Library page: new hero copy, list, filters, search
app/resources/[id]/page.tsx      One static page per document (generateStaticParams)
components/ResourceLibrary.tsx   Rewritten: category and type filters, search box, list and results
components/PdfViewer.tsx         Client component wrapping the PDF.js viewer
app/globals.css                  New rules next to the existing .res-* rules
app/sitemap.ts                   Adds the 57 document pages
README.md                        "Resources" editing notes updated
```

The document id is the PDF filename without `.pdf` (`gsr-78e-20170131`). It is also the URL
slug, so the original file is `/docs/<id>.pdf` and its page is `/resources/<id>`.

## Requirements

### A. Library list on `/resources`

- **A1.** Lists all 57 documents, newest first (undated ones last). Each row shows date,
  number, title, a category tag, a type tag and a draft tag where it applies, a link
  to the document page, and a direct link to the original PDF.
- **A2.** Two filter groups in the sidebar, combined with AND:
  - **Category** (the existing filter, unchanged labels): All Resources (57), CDSCO / India
    (56), EU MDR / IVDR (0), US FDA (0), ISO Standards (0), General / Other (1).
  - **Type** (new): All types (57), Final notifications (32), Draft notifications (20),
    Guidance & circulars (3), Checklists (1), Reference (1).

  Every option is always shown, including those with no documents. Counts come from the
  catalog and reflect the other group's current selection. Choosing an option with no
  matches shows an empty-state message (wording reviewed by the owner).
- **A3.** The existing page heading, intro text and meta description stay as they are, since
  the category filters still cover CDSCO, EU MDR/IVDR, US FDA and ISO. Any copy change is
  proposed to the owner first.
- **A4.** None of the 12 placeholder entries remain.

### B. Full-text search on `/resources`

- **B1.** One search box. With no query, the page shows the list (A1). With a query of 2 or
  more characters, it shows results instead. Both filter groups narrow results as well.
- **B2.** Results show **every occurrence** of the query in every document:
  - A totals line, e.g. `412 matches on 96 pages in 23 documents`.
  - Results are grouped by document. Documents whose number, title or keywords match rank
    first; the rest rank by number of occurrences.
  - Each document shows its title, number and occurrence count, then every matching page in
    order. Each page shows every occurrence as a snippet (`p. 12 … text with the term
    highlighted …`). Occurrences a few words apart share one snippet.
  - Nothing is capped. Very long result lists (a common word can match thousands of times)
    render in batches as the visitor scrolls or presses "Show more", so the page stays
    responsive, but every occurrence is reachable.
- **B3.** A snippet links to `/resources/<id>#page=<n>&q=<query>`. A result title links to
  `/resources/<id>#q=<query>`. Each result also has a direct link to the original PDF.
- **B4.** Matching follows Assumption 5. Punctuation inside regulatory references must still
  match: `MD-14`, `G.S.R. 78(E)`, `744(E)`, `Rule 26`.
- **B5.** The index loads lazily, on first focus of or keystroke in the search box, never on
  page load. A loading state is shown while it loads. If it fails to load, search falls
  back to the catalog fields and says so.
- **B6.** Results update as the visitor types (debounced, at most 150 ms). The result count is
  announced to screen readers through a polite live region.
- **B7.** The query is mirrored in the URL fragment (`/resources#q=form%20md-14`), so the Back
  button and shared links restore it. A fragment is never sent to the server or to
  analytics.

### C. Document page `/resources/<id>`

- **C1.** One statically generated page per catalog entry, each with its own `<title>`, meta
  description and canonical URL (via `pageMetadata`) and a breadcrumb
  `Resources > <number or title>`. With no summaries, the meta description is filled from a
  template of number, date and title; the template wording is approved by the owner first.
- **C2.** The header shows title, number, date, category, type and draft status, plus two
  links to the unmodified original: "Download PDF" (`download` attribute) and "Open PDF in
  new tab".
- **C3.** The embedded viewer renders the original PDF with PDF.js: continuous scroll, selectable
  text, page indicator (`page 12 of 250`) with previous/next buttons and a page-number input,
  zoom in/out and fit-to-width.
- **C4.** `#page=N` opens at page N. `#q=<query>` highlights every match in the document and
  scrolls to the first match on or after the requested page. Previous/next match controls
  show `match 3 of 41`.
- **C5.** A find box on the document page edits the query and updates highlights in place.
- **C6.** Without JavaScript, on a browser too old for PDF.js, or if the viewer fails to load
  the file, the header and both PDF links still work and the viewer area shows a short
  message with a link to the original.
- **C7.** At 375 px width the viewer fits the screen width, controls do not overflow, and the
  page has no horizontal scroll.
- **C8.** PDF.js code and its worker are requested only on document pages.

### D. Build and data

- **D1.** `scripts/build-doc-index.mjs` extracts each page's text with `pdfjs-dist`, removes
  Devanagari and non-printing characters, collapses whitespace, and writes
  `public/search/index.json` as `{ "docs": { "<id>": ["page 1 text", "page 2 text", …] } }`.
- **D2.** The build stops with a clear error naming the file if a PDF in `public/docs/` has
  no catalog entry, an entry has no PDF, or two entries share an id.
- **D3.** The PDF.js worker, cMaps and standard fonts are copied from `node_modules` to
  `public/pdfjs/` so the viewer loads nothing from a CDN.
- **D4.** `app/sitemap.ts` lists all 57 document pages.
- **D5.** Adding a document later means dropping the PDF into `public/docs/` and adding one
  catalog entry. README explains this.

## Code Style

Follow the existing code. A catalog entry in `lib/resources.ts` will look like this (the data
file keeps its "HOW TO ADD" header comment):

```ts
export type Resource = {
  /** PDF filename without .pdf; also the URL slug: /docs/<id>.pdf and /resources/<id>. */
  id: string;
  /** Gazette reference as printed, e.g. "G.S.R. 78(E)". Omitted for guidance documents. */
  number?: string;
  /** ISO date of issue. Omitted when the document carries none. */
  date?: string;
  /** Category filter group; CATEGORIES is kept as it is today. */
  category: CategoryId;
  kind: "notification" | "guidance" | "circular" | "checklist" | "reference";
  status: "final" | "draft";
  title: string;
  /** Extra search terms beyond the visible text, e.g. common abbreviations. */
  keywords?: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "gsr-78e-20170131",
    number: "G.S.R. 78(E)",
    date: "2017-01-31",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "Medical Devices Rules, 2017",
    keywords: "MDR 2017 CDSCO licensing classification",
  },
  // …
];
```

Conventions:

- Prettier with `printWidth: 100`, double quotes, semicolons; run `npm run format`. Prettier
  skips CSS and Markdown: write CSS in the compact one-rule-per-line style of
  `app/globals.css`, using its tokens (`--teal`, `--gray1`…`--gray6`, `--border`, `--r`,
  `--r2`).
- Comments explain why, not what. Components are default-exported functions; `"use client"`
  only where state or effects are needed.
- App code imports with `@/`. `lib/search.ts` stays pure (no React, no DOM, no `@/` imports)
  so `node --test` can load it directly.
- Dependency versions are exact in `package.json` (no `^` or `~`).

## Testing Strategy

- **Unit tests (`node --test`)** for `lib/search.ts`: query parsing (words, quoted phrases,
  minimum length, case), page matching (all words, some words in the partial-matches section,
  partial words, phrases, punctuation cases from B4, common words), ranking (catalog matches
  first, then occurrence count), snippets (every occurrence returned, window around the
  match, highlight ranges, start and end of page, nearby occurrences merged into one
  snippet). Every exported function is covered.
- **Unit tests for `lib/resources.ts`**, where the filters live: category and type filtering
  (each alone, combined, and options with zero documents), the counts shown beside each
  filter, sorting, dates, page titles and descriptions, and the real catalog's totals (A2).
- **Build-time checks** as data tests: D2, plus every document has at least one page of
  non-empty text and the page count in the index equals the PDF's page count.
- **Manual checks in the browser**, against both `npm run dev` and the static `out/`
  (`npm run build && npm start`): the success criteria below, at desktop width and at 375 px,
  keyboard only, and with JavaScript disabled.
- **Accessibility:** new UI meets WCAG 2.2 AA (labelled controls, visible focus, contrast
  from existing tokens, viewer controls operable by keyboard).
- No end-to-end framework in V1 (see Deferred).

## Boundaries

**Always**

- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code
  (`AGENTS.md`).
- Publish the PDFs byte-identical to the originals in `documents.zip`.
- Keep the site fully static: it must work from `out/` on GitHub Pages with no server.
- Keep search and viewing first-party: no CDN, no third-party requests, no cookies or
  storage of queries.
- Run `npm test` and `npm run build` before every commit.

**Ask first**

- Any dependency other than `pdfjs-dist`.
- Changes to `.github/workflows/deploy.yml`.
- Changes to the nav, footer or any page other than `/resources` and the sitemap.
- Publishing the drafted titles, the meta description template, and any other new visible
  wording (owner reviews them first).
- Adding a summary or other descriptive text to any document.
- Deleting `documents.zip` (adding it to `.gitignore` is already approved).
- The empty-state wording shown for filters with no documents.

**Never**

- Commit `documents.zip`, `public/search/index.json` or `public/pdfjs/`.
- Modify, compress, re-save or watermark the PDFs.
- Put the search query in a URL query string or send it anywhere (the fragment only).

## Success Criteria

1. `/resources` lists exactly 57 documents and none of the 12 placeholder titles. Every PDF link
   returns 200 from `npm start`, and each served file's SHA-256 matches its counterpart in
   `documents.zip`. All six category options and all six type options from A2 are shown,
   with 0 on the empty ones.
2. Searching `Form MD-14`, `"Class C"` and `G.S.R. 78(E)` each returns results grouped by
   document, with page numbers and highlighted snippets, within 300 ms of the keystroke once
   the index has loaded. For each of these queries and for the common word `device`, the
   number of occurrences listed equals an independent count over the extracted text, and the
   first results of `device` appear within 300 ms without freezing the page.
3. Clicking a snippet for page N opens `/resources/<id>` with page N in view and the term
   highlighted. "Next match" visits every match in the document in order.
4. Opening the 250-page Medical Devices Rules at page 200 shows that page within 3 s on a
   desktop broadband connection with an empty cache.
5. The search index is at most 400 KB compressed in transfer. It is not requested on
   `/resources` until the search box is focused or typed in, and never on other pages.
6. PDF.js files are requested only on `/resources/<id>` pages.
7. Going Back from a document page to `/resources` restores the query and its results.
8. The build fails with a clear message when a PDF is added without a catalog entry, or an
   entry is added without a PDF.
9. `out/sitemap.xml` contains all 57 document URLs, and each document page has a unique title
   and meta description.
10. At 375 px width neither `/resources` nor a document page scrolls horizontally. All
    controls are reachable and operable by keyboard. The Lighthouse accessibility score is at
    least 95 on `/resources` and on one document page.
11. With JavaScript disabled, `/resources` shows the full list with working PDF links, and a
    document page shows its header and PDF links.
12. `npm test` and `npm run build` pass locally, and the deploy workflow's output checks pass.

## Out of Scope (Deferred)

- Hindi full-text search: needs OCR or remapping of the legacy font encodings. Known
  leftover: some Hindi fonts extract as Latin letters (`Hkkjr`), which cannot be told from
  English and stay in the index. They match no English word, only stray short fragments.
- **V2 goal:** spelling tolerance (typos, and variants such as `licence` / `license`),
  stemming, and understanding what the visitor means (intent or meaning-based search),
  not only the exact words typed.
- One-line summaries for documents (only with the owner's approved wording).
- Linking each draft notification to the final one that replaced it: needs the owner's
  mapping.
- EU MDR/IVDR, US FDA and ISO documents (the removed placeholders): add when real files exist.
- Viewer thumbnails, outline sidebar, print button, annotations.
- A site-wide search box in the header.
- Recording what visitors search for: conflicts with the site's privacy stance.
- An end-to-end test framework (e.g. Playwright): a new dependency, revisit if the
  library grows.
- Shrinking the PDFs: conflicts with publishing the originals unchanged.

## Open Questions

1. **Several-word queries (Assumption 5):** built as proposed (pages with every word first,
   then pages with only some of the words in a separate section). The owner approved the
   spec without choosing; say so if "every word must appear" or "any word is enough" is
   preferred.

Resolved with the owner on 2026-11-22:

1. **Filters (A2):** keep every category filter, even empty ones, and add a type filter.
2. **US tariff chapter** (`guidance-chapter-30-2026htsrev19.pdf`): kept as a "reference"
   under General / Other.
3. **English-only search:** accepted for V1.
4. **`documents.zip`:** added to `.gitignore` after import; the local copy is kept.
5. **No one-line summaries;** any descriptive text needs the owner's approval first.
6. **Exhaustive search:** any word, every occurrence shown. Spelling and intent are V2.
