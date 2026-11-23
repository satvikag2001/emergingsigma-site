import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildFragment,
  compileTerm,
  findOccurrences,
  makeSnippets,
  mergeRanges,
  parseQuery,
  readFragment,
  search,
  viewerMatches,
  type SearchDoc,
} from "./search.ts";

const texts = (q: string) => parseQuery(q).map((t) => t.text);
const matched = (q: string, text: string) =>
  findOccurrences(parseQuery(q), text).map((o) => text.slice(o.start, o.end));

test("parseQuery: words, lower case, in the order typed", () => {
  assert.deepEqual(texts("Form MD-14 Licence"), ["form", "md-14", "licence"]);
});

test("parseQuery: double quotes make one phrase; typographic quotes count", () => {
  const terms = parseQuery('"Class C" device \u201Cmedical   device\u201D');
  assert.deepEqual(
    terms.map((t) => [t.text, t.phrase]),
    [
      ["class c", true],
      ["device", false],
      ["medical device", true],
    ],
  );
});

test("parseQuery: a quoted single word is a plain word; an unclosed quote is ignored", () => {
  assert.deepEqual(texts('"sterile"'), ["sterile"]);
  assert.deepEqual(texts('"form md'), ["form", "md"]);
});

test("parseQuery: ignores terms under 2 characters, blanks and duplicates", () => {
  assert.deepEqual(texts("a"), []);
  assert.deepEqual(texts("   "), []);
  assert.deepEqual(texts('""'), []);
  assert.deepEqual(texts("Class C"), ["class"]);
  assert.deepEqual(texts("device Device DEVICE"), ["device"]);
});

test("parseQuery: drops sentence punctuation but keeps reference punctuation", () => {
  assert.deepEqual(texts("licence, import;"), ["licence", "import"]);
  assert.deepEqual(texts("G.S.R. 78(E)"), ["g.s.r.", "78(e)"]);
});

test("matching: case-insensitive and partial words", () => {
  // The highlight covers what was typed, as in a browser's find.
  assert.deepEqual(matched("calibrat", "Calibration and CALIBRATED tools"), [
    "Calibrat",
    "CALIBRAT",
  ]);
  assert.deepEqual(matched("licence", "a licence; two licences"), ["licence", "licence"]);
});

test("matching: common words are found too, every occurrence", () => {
  assert.equal(matched("the", "The rule, the form and the other").length, 4);
});

test("matching: references with punctuation, spacing variants and dashes", () => {
  assert.deepEqual(matched("MD-14", "Form MD-14, Form MD - 14 and Form MD\u201314"), [
    "MD-14",
    "MD - 14",
    "MD\u201314",
  ]);
  assert.deepEqual(matched("744(E)", "G.S.R. 744(E) and 744 (E)"), ["744(E)", "744 (E)"]);
  assert.deepEqual(matched('"G.S.R. 78(E)"', "vide G.S.R. 78(E) and G. S. R. 78 (E)"), [
    "G.S.R. 78(E)",
    "G. S. R. 78 (E)",
  ]);
  assert.deepEqual(matched('"Rule 26"', "under Rule 26 and rule  26"), ["Rule 26", "rule  26"]);
});

test("matching: a phrase needs its words in order", () => {
  assert.deepEqual(matched('"class c"', "Class C device; class B or C"), ["Class C"]);
});

test("matching: a typed space next to punctuation is optional", () => {
  assert.deepEqual(matched('"78 (E)"', "78(E)"), ["78(E)"]);
});

test("compileTerm: regex characters in the query are literal", () => {
  assert.equal(compileTerm("a+b").test("a+b"), true);
  assert.equal(compileTerm("a.b").test("axb"), false);
  assert.equal(compileTerm("[x]").test("[x]"), true);
});

test("mergeRanges: joins overlapping and touching ranges", () => {
  assert.deepEqual(
    mergeRanges([
      { start: 10, end: 15 },
      { start: 0, end: 4 },
      { start: 12, end: 20 },
      { start: 20, end: 22 },
    ]),
    [
      { start: 0, end: 4 },
      { start: 10, end: 22 },
    ],
  );
});

const DOCS: SearchDoc[] = [
  {
    id: "newest",
    catalog: "G.S.R. 1(E) Medical Devices (Amendment) Rules",
    pages: ["Import licence in Form MD-15.", "Nothing here.", "Form MD-14 and Form MD-14 again."],
  },
  {
    id: "middle",
    catalog: "S.O. 2(E) Notification of devices",
    pages: ["Form MD-14 once. Form MD-14 twice. Form MD-14 thrice."],
  },
  {
    id: "oldest",
    catalog: "G.S.R. 78(E) Medical Devices Rules, 2017",
    pages: ["The licence in Form MD-14.", "An import licence."],
  },
];

test("search: null when the query has no usable terms", () => {
  assert.equal(search(DOCS, ""), null);
  assert.equal(search(DOCS, "x"), null);
});

test("search: every occurrence, grouped by document, ranked by count", () => {
  const r = search(DOCS, "MD-14")!;
  assert.deepEqual(
    r.full.map((d) => [d.id, d.count, d.pages.map((p) => p.page)]),
    [
      ["middle", 3, [1]],
      ["newest", 2, [3]],
      ["oldest", 1, [1]],
    ],
  );
  assert.equal(r.matches, 6);
  assert.equal(r.pages, 3);
  assert.deepEqual(r.partial, []);
});

test("search: catalog matches rank first, even with fewer occurrences", () => {
  const docs = [
    { id: "many", catalog: "Notification", pages: ["sterile sterile sterile"] },
    { id: "titled", catalog: "Sterile devices", pages: ["sterile"] },
  ];
  assert.deepEqual(
    search(docs, "sterile")!.full.map((d) => [d.id, d.count]),
    [
      ["titled", 1],
      ["many", 3],
    ],
  );
});

test("search: a page needs every word; catalog words do not complete a page", () => {
  // "rules" is only in the catalog of newest and oldest, so none of their pages
  // has both words, and every MD-14 page is a partial match.
  const r = search(DOCS, "rules MD-14")!;
  assert.deepEqual(r.full, []);
  assert.deepEqual(
    r.partial.map((d) => d.id),
    ["newest", "oldest", "middle"],
  );
});

test("search: several words, pages with all of them first, then some of them", () => {
  const r = search(DOCS, "import licence MD-14")!;
  assert.deepEqual(r.full, []);
  const r2 = search(DOCS, "licence MD-14")!;
  assert.deepEqual(
    r2.full.map((d) => [d.id, d.pages.map((p) => p.page)]),
    [["oldest", [1]]],
  );
  assert.deepEqual(
    r2.partial.map((d) => [d.id, d.pages.map((p) => [p.page, p.terms])]),
    [
      [
        "newest",
        [
          [1, 1],
          [3, 1],
        ],
      ],
      ["middle", [[1, 1]]],
      ["oldest", [[2, 1]]],
    ],
  );
  assert.equal(r2.partialPages, 4);
  assert.equal(r.partial.length, 3);
});

test("search: works on catalog fields alone when the full text is missing", () => {
  const bare = DOCS.map((d) => ({ ...d, pages: [] }));
  const r = search(bare, "G.S.R. 78(E)")!;
  assert.deepEqual(
    r.full.map((d) => d.id),
    ["oldest"],
  );
  assert.equal(r.matches, 0);
});

test("search: ties keep catalog order", () => {
  const docs = [
    { id: "a", catalog: "", pages: ["sterile"] },
    { id: "b", catalog: "", pages: ["sterile"] },
  ];
  assert.deepEqual(
    search(docs, "sterile")!.full.map((d) => d.id),
    ["a", "b"],
  );
});

test("makeSnippets: window around the match with highlight ranges", () => {
  const text = "one two three four five six seven eight nine ten";
  const [s] = makeSnippets(text, [{ start: 24, end: 27 }], 10);
  assert.equal(text.slice(24, 27), "six");
  assert.equal(s.text.slice(s.marks[0][0], s.marks[0][1]), "six");
  assert.equal(s.lead, true);
  assert.equal(s.trail, true);
  // 10 characters either side, then cut back to whole words.
  assert.equal(s.text, "four five six seven");
});

test("makeSnippets: at the start and end of the page there is no ellipsis", () => {
  const text = "Device at start and at end device";
  const snippets = makeSnippets(
    text,
    [
      { start: 0, end: 6 },
      { start: 27, end: 33 },
    ],
    5,
  );
  assert.equal(snippets.length, 2);
  assert.equal(snippets[0].lead, false);
  assert.equal(snippets[1].trail, false);
});

test("makeSnippets: nearby occurrences share one snippet; distant ones do not", () => {
  const text = "md md " + "x".repeat(300) + " md";
  const snippets = makeSnippets(text, findOccurrences(parseQuery("md"), text), 20);
  assert.equal(snippets.length, 2);
  assert.equal(snippets[0].marks.length, 2);
  assert.equal(snippets[1].marks.length, 1);
});

test("makeSnippets: overlapping occurrences of different terms become one mark", () => {
  const text = "a Class C device";
  const occ = findOccurrences(parseQuery('class "class c"'), text);
  const [s] = makeSnippets(text, occ);
  assert.deepEqual(s.marks, [[2, 9]]);
});

test("makeSnippets: every occurrence appears in some snippet", () => {
  const text = Array.from({ length: 200 }, (_, i) => `word${i} device`).join(" ");
  const occ = findOccurrences(parseQuery("device"), text);
  const marks = makeSnippets(text, occ).reduce((n, s) => n + s.marks.length, 0);
  assert.equal(occ.length, 200);
  assert.equal(marks, 200);
});

test("viewerMatches: index/length pairs for every term, merged", () => {
  assert.deepEqual(viewerMatches('class "class c"', "a Class C, class B"), [
    { index: 2, length: 7 },
    { index: 11, length: 5 },
  ]);
  assert.deepEqual(viewerMatches("x", "xxx"), []);
});

test("fragments: build and read back, ignoring empty values", () => {
  const hash = buildFragment({ q: "form md-14", page: 12, cat: "", type: undefined });
  assert.equal(hash, "#q=form%20md-14&page=12");
  assert.deepEqual(readFragment(hash), { q: "form md-14", page: "12" });
  assert.equal(buildFragment({ q: "" }), "");
  assert.deepEqual(readFragment(""), {});
  assert.deepEqual(readFragment("#q=a+b"), { q: "a b" });
});
