import { test } from "node:test";
import assert from "node:assert/strict";
import {
  CATEGORIES,
  RESOURCES,
  TYPES,
  byNewest,
  catalogText,
  docPath,
  filterCounts,
  formatDate,
  matchesFilters,
  pageDescription,
  pageTitle,
  pdfPath,
  shortName,
  typeOf,
  type Resource,
} from "./resources.ts";

const doc = (over: Partial<Resource> & { id: string }): Resource => ({
  category: "cdsco",
  kind: "notification",
  status: "final",
  title: `Title of ${over.id}`,
  ...over,
});

// Four Indian documents and one that is not, as in the real catalog's shape.
const SAMPLE: Resource[] = [
  doc({ id: "final-a", date: "2022-03-04" }),
  doc({ id: "final-b", date: "2020-02-11" }),
  doc({ id: "draft-a", date: "2021-12-10", status: "draft" }),
  doc({ id: "circular-a", kind: "circular" }),
  doc({ id: "tariff", kind: "reference", category: "general" }),
];

test("typeOf: notifications split into final and draft", () => {
  assert.equal(typeOf({ kind: "notification", status: "final" }), "final");
  assert.equal(typeOf({ kind: "notification", status: "draft" }), "draft");
});

test("typeOf: guidance and circulars share one type, draft or not", () => {
  assert.equal(typeOf({ kind: "guidance", status: "final" }), "guidance");
  assert.equal(typeOf({ kind: "guidance", status: "draft" }), "guidance");
  assert.equal(typeOf({ kind: "circular", status: "final" }), "guidance");
});

test("typeOf: checklists and reference documents keep their own type", () => {
  assert.equal(typeOf({ kind: "checklist", status: "final" }), "checklist");
  assert.equal(typeOf({ kind: "reference", status: "final" }), "reference");
});

test("matchesFilters: 'all' in both groups matches every document", () => {
  assert.equal(SAMPLE.filter((r) => matchesFilters(r, "all", "all")).length, 5);
});

test("matchesFilters: a category or a type alone narrows the list", () => {
  const ids = (list: Resource[]) => list.map((r) => r.id);
  assert.deepEqual(ids(SAMPLE.filter((r) => matchesFilters(r, "general", "all"))), ["tariff"]);
  assert.deepEqual(ids(SAMPLE.filter((r) => matchesFilters(r, "all", "draft"))), ["draft-a"]);
});

test("matchesFilters: category and type combine with AND", () => {
  const ids = (c: Parameters<typeof matchesFilters>[1], t: Parameters<typeof matchesFilters>[2]) =>
    SAMPLE.filter((r) => matchesFilters(r, c, t)).map((r) => r.id);
  assert.deepEqual(ids("cdsco", "final"), ["final-a", "final-b"]);
  assert.deepEqual(ids("general", "final"), []);
  assert.deepEqual(ids("eu", "all"), []);
});

test("filterCounts: every option is present, including those with no documents", () => {
  const { categories, types } = filterCounts(SAMPLE, "all", "all");
  assert.deepEqual(categories, { all: 5, cdsco: 4, eu: 0, fda: 0, iso: 0, general: 1 });
  assert.deepEqual(types, { all: 5, final: 2, draft: 1, guidance: 1, checklist: 0, reference: 1 });
});

test("filterCounts: each group's counts reflect the other group's selection", () => {
  // With the Reference type chosen, only the tariff chapter is left to count by category.
  assert.deepEqual(filterCounts(SAMPLE, "all", "reference").categories, {
    all: 1,
    cdsco: 0,
    eu: 0,
    fda: 0,
    iso: 0,
    general: 1,
  });
  // With CDSCO chosen, the tariff chapter drops out of the type counts.
  assert.deepEqual(filterCounts(SAMPLE, "cdsco", "all").types, {
    all: 4,
    final: 2,
    draft: 1,
    guidance: 1,
    checklist: 0,
    reference: 0,
  });
});

test("filterCounts: a group's own selection does not change its own counts", () => {
  assert.deepEqual(
    filterCounts(SAMPLE, "general", "all").categories,
    filterCounts(SAMPLE, "all", "all").categories,
  );
});

test("the catalog: 57 documents with the counts SPEC.md lists (A2)", () => {
  const { categories, types } = filterCounts(RESOURCES, "all", "all");
  assert.deepEqual(categories, { all: 57, cdsco: 56, eu: 0, fda: 0, iso: 0, general: 1 });
  assert.deepEqual(types, {
    all: 57,
    final: 32,
    draft: 20,
    guidance: 3,
    checklist: 1,
    reference: 1,
  });
});

test("the catalog: ids are unique and safe to use as URL slugs", () => {
  const ids = RESOURCES.map((r) => r.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ids) assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});

test("the catalog: every document page gets a different title", () => {
  const titles = RESOURCES.map(pageTitle);
  assert.equal(new Set(titles).size, titles.length);
});

test("filter option lists: 'all' first, then the options in display order", () => {
  assert.deepEqual(
    CATEGORIES.map((c) => c.id),
    ["all", "cdsco", "eu", "fda", "iso", "general"],
  );
  assert.deepEqual(
    TYPES.map((t) => t.id),
    ["all", "final", "draft", "guidance", "checklist", "reference"],
  );
});

test("byNewest: newest first, undated documents last, ties by id", () => {
  const sorted = [...SAMPLE].sort(byNewest).map((r) => r.id);
  assert.deepEqual(sorted, ["final-a", "draft-a", "final-b", "circular-a", "tariff"]);
  const sameDay = [doc({ id: "b", date: "2026-08-14" }), doc({ id: "a", date: "2026-08-14" })];
  assert.deepEqual(
    sameDay.sort(byNewest).map((r) => r.id),
    ["a", "b"],
  );
});

test("formatDate: day, short month, year; empty when there is no date", () => {
  assert.equal(formatDate("2017-01-31"), "31 Jan 2017");
  assert.equal(formatDate("2026-09-03"), "3 Sep 2026");
  assert.equal(formatDate(undefined), "");
});

test("paths: the document page and the original PDF both come from the id", () => {
  assert.equal(docPath("gsr-78e-20170131"), "/resources/gsr-78e-20170131");
  assert.equal(pdfPath("gsr-78e-20170131"), "/docs/gsr-78e-20170131.pdf");
});

test("catalogText: number (with and without dots), title and keywords", () => {
  const text = catalogText(
    doc({ id: "x", number: "G.S.R. 78(E)", title: "Medical Devices Rules, 2017", keywords: "MDR" }),
  );
  for (const part of ["G.S.R. 78(E)", "GSR 78(E)", "Medical Devices Rules, 2017", "MDR"]) {
    assert.ok(text.includes(part), `missing ${part}`);
  }
  assert.equal(catalogText(doc({ id: "y", title: "Only a title" })), "Only a title");
});

test("shortName: the number when there is one, otherwise the title", () => {
  assert.equal(shortName(doc({ id: "x", number: "S.O. 648(E)" })), "S.O. 648(E)");
  assert.equal(shortName(doc({ id: "y", title: "A checklist" })), "A checklist");
});

test("pageTitle: title, number in brackets when present, then the site name", () => {
  assert.equal(
    pageTitle(doc({ id: "x", number: "S.O. 648(E)", title: "A notification" })),
    "A notification (S.O. 648(E)) | Emerging Sigma Consulting",
  );
  assert.equal(
    pageTitle(doc({ id: "y", title: "A checklist", kind: "checklist" })),
    "A checklist | Emerging Sigma Consulting",
  );
});

test("pageDescription: kind, reference and title; drafts say so", () => {
  assert.equal(
    pageDescription(doc({ id: "x", number: "G.S.R. 165(E)", date: "2026-03-02", title: "T" })),
    "Notification G.S.R. 165(E), 2 Mar 2026: T. Read the original document and search its full text.",
  );
  assert.equal(
    pageDescription(
      doc({ id: "y", number: "G.S.R. 269(E)", date: "2026-04-10", status: "draft", title: "T" }),
    ),
    "Draft notification G.S.R. 269(E), 10 Apr 2026: T. Read the original document and search its full text.",
  );
  assert.equal(
    pageDescription(doc({ id: "z", kind: "guidance", title: "T" })),
    "Guidance: T. Read the original document and search its full text.",
  );
});
