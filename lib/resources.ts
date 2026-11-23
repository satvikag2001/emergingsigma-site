/* The regulatory document library on /resources.

   HOW TO ADD A DOCUMENT
   1. Drop the PDF into public/docs/. Its filename without .pdf is the document's
      id, and also its address: /docs/<id>.pdf and /resources/<id>.
   2. Add an entry below with that id. Order does not matter; the list is shown
      newest first by `date`. `title` is the file name: the owner chose to list
      documents under their file names, so write "<id>.pdf" unless the owner gives
      a title for it. A test checks this.
   3. Run `npm run build`. It stops with a clear message if a PDF has no entry or
      an entry has no PDF, and it rebuilds the full-text search index.
   `category` and the kind/status pair decide which filters a document sits
   under; filter counts and search pick it up automatically. `keywords` are extra
   search terms beyond the document's own text, such as common abbreviations.

   No imports on purpose: scripts/build-doc-index.mjs and the tests load this
   file directly with Node. */

export const CATEGORIES = [
  { id: "all", label: "All Resources" },
  { id: "cdsco", label: "CDSCO / India" },
  { id: "eu", label: "EU MDR / IVDR" },
  { id: "fda", label: "US FDA" },
  { id: "iso", label: "ISO Standards" },
  { id: "general", label: "General / Other" },
] as const;

export type CategoryId = Exclude<(typeof CATEGORIES)[number]["id"], "all">;

/** Short label shown in the Category column. */
export const CATEGORY_TAGS: Record<CategoryId, string> = {
  cdsco: "CDSCO",
  eu: "EU MDR / IVDR",
  fda: "US FDA",
  iso: "ISO",
  general: "General",
};

export const TYPES = [
  { id: "all", label: "All types" },
  { id: "final", label: "Final notifications" },
  { id: "draft", label: "Draft notifications" },
  { id: "guidance", label: "Guidance & circulars" },
  { id: "checklist", label: "Checklists" },
  { id: "reference", label: "Reference" },
] as const;

export type TypeId = Exclude<(typeof TYPES)[number]["id"], "all">;

export type Kind = "notification" | "guidance" | "circular" | "checklist" | "reference";

/** Label shown in the Type column. */
export const KIND_TAGS: Record<Kind, string> = {
  notification: "Notification",
  guidance: "Guidance",
  circular: "Circular",
  checklist: "Checklist",
  reference: "Reference",
};

export type Resource = {
  /** PDF filename without .pdf; also the URL slug: /docs/<id>.pdf and /resources/<id>. */
  id: string;
  /** Gazette reference as printed, e.g. "G.S.R. 78(E)". Omitted for guidance documents. */
  number?: string;
  /** ISO date of issue. Omitted when the document carries none. */
  date?: string;
  category: CategoryId;
  kind: Kind;
  status: "final" | "draft";
  title: string;
  /** Extra search terms beyond the visible text, e.g. common abbreviations. */
  keywords?: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "guidance-circular-no-40-2026",
    date: "2026-09-03",
    category: "cdsco",
    kind: "circular",
    status: "final",
    title: "guidance-circular-no-40-2026.pdf",
  },
  {
    id: "gsr-744e-20260814",
    number: "G.S.R. 744(E)",
    date: "2026-08-14",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-744e-20260814.pdf",
    keywords: "NSNM QMS",
  },
  {
    id: "gsr-743e-20260814",
    number: "G.S.R. 743(E)",
    date: "2026-08-14",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-743e-20260814.pdf",
  },
  {
    id: "gsr-270e-20260410-draft",
    number: "G.S.R. 270(E)",
    date: "2026-04-10",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-270e-20260410-draft.pdf",
    keywords: "G.S.R. 743(E) Medical Devices (Second Amendment) Rules, 2026",
  },
  {
    id: "gsr-269e-20260410-draft",
    number: "G.S.R. 269(E)",
    date: "2026-04-10",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-269e-20260410-draft.pdf",
    keywords: "NSNM QMS G.S.R. 744(E) Medical Devices (Third Amendment) Rules, 2026",
  },
  {
    id: "gsr-165e-20260302",
    number: "G.S.R. 165(E)",
    date: "2026-03-02",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-165e-20260302.pdf",
  },
  {
    id: "so-912e-20260218",
    number: "S.O. 912(E)",
    date: "2026-02-18",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-912e-20260218.pdf",
  },
  {
    id: "gsr-883e-20251204-draft",
    number: "G.S.R. 883(E)",
    date: "2025-12-04",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-883e-20251204-draft.pdf",
    keywords: "NSNM",
  },
  {
    id: "gsr-748e-20251010-draft",
    number: "G.S.R. 748(E)",
    date: "2025-10-10",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-748e-20251010-draft.pdf",
    keywords: "G.S.R. 165(E) Medical Devices (Amendment) Rules, 2026",
  },
  {
    id: "so-5331e-20241210",
    number: "S.O. 5331(E)",
    date: "2024-12-10",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-5331e-20241210.pdf",
  },
  {
    id: "so-5330e-20241210",
    number: "S.O. 5330(E)",
    date: "2024-12-10",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-5330e-20241210.pdf",
  },
  {
    id: "gsr-409e-20230602",
    number: "G.S.R. 409(E)",
    date: "2023-06-02",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-409e-20230602.pdf",
  },
  {
    id: "gsr-157e-20230301-draft",
    number: "G.S.R. 157(E)",
    date: "2023-03-01",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-157e-20230301-draft.pdf",
    keywords: "G.S.R. 409(E)",
  },
  {
    id: "gsr-777e-20221014",
    number: "G.S.R. 777(E)",
    date: "2022-10-14",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-777e-20221014.pdf",
    keywords: "NSNM",
  },
  {
    id: "gsr-754e-20220930",
    number: "G.S.R. 754(E)",
    date: "2022-09-30",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-754e-20220930.pdf",
  },
  {
    id: "so-4574e-20220928",
    number: "S.O. 4574(E)",
    date: "2022-09-28",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-4574e-20220928.pdf",
  },
  {
    id: "so-4573e-20220928",
    number: "S.O. 4573(E)",
    date: "2022-09-28",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-4573e-20220928.pdf",
  },
  {
    id: "gsr-710e-20220920-draft",
    number: "G.S.R. 710(E)",
    date: "2022-09-20",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-710e-20220920-draft.pdf",
    keywords: "NSNM G.S.R. 777(E) Medical Devices (Sixth Amendment) Rules, 2022",
  },
  {
    id: "so-3739e-20220802",
    number: "S.O. 3739(E)",
    date: "2022-08-02",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-3739e-20220802.pdf",
  },
  {
    id: "gsr-450e-20220615",
    number: "G.S.R. 450(E)",
    date: "2022-06-15",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-450e-20220615.pdf",
  },
  {
    id: "gsr-356e-20220518",
    number: "G.S.R. 356(E)",
    date: "2022-05-18",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-356e-20220518.pdf",
  },
  {
    id: "gsr-228e-20220329-draft",
    number: "G.S.R. 228(E)",
    date: "2022-03-29",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-228e-20220329-draft.pdf",
    keywords: "G.S.R. 450(E) Medical Devices (Fourth Amendment) Rules, 2022",
  },
  {
    id: "gsr-174e-20220304",
    number: "G.S.R. 174(E)",
    date: "2022-03-04",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-174e-20220304.pdf",
    keywords: "free sale certificate",
  },
  {
    id: "gsr-104e-20220209-draft",
    number: "G.S.R. 104(E)",
    date: "2022-02-09",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-104e-20220209-draft.pdf",
    keywords: "G.S.R. 754(E) Medical Devices (Fifth Amendment) Rules, 2022",
  },
  {
    id: "gsr-23e-20220118-draft",
    number: "G.S.R. 23(E)",
    date: "2022-01-18",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-23e-20220118-draft.pdf",
    keywords: "G.S.R. 356(E) Medical Devices (Third Amendment) Rules, 2022",
  },
  {
    id: "gsr-19e-20220118",
    number: "G.S.R. 19(E)",
    date: "2022-01-18",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-19e-20220118.pdf",
  },
  {
    id: "gsr-918e-20211231",
    number: "G.S.R. 918(E)",
    date: "2021-12-31",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-918e-20211231.pdf",
    keywords: "UDI",
  },
  {
    id: "so-877e-20211223-draft",
    number: "S.O. 877(E)",
    date: "2021-12-23",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "so-877e-20211223-draft.pdf",
    keywords: "UDI G.S.R. 877(E) G.S.R. 918(E)",
  },
  {
    id: "gsr-850e-20211210-draft",
    number: "G.S.R. 850(E)",
    date: "2021-12-10",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-850e-20211210-draft.pdf",
    keywords: "free sale certificate G.S.R. 174(E) Medical Devices (2nd Amendment) Rules, 2022",
  },
  {
    id: "gsr-729e-20211012-draft",
    number: "G.S.R. 729(E)",
    date: "2021-10-12",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-729e-20211012-draft.pdf",
    keywords: "G.S.R. 19(E)",
  },
  {
    id: "gsr-98e-20210205-draft",
    number: "G.S.R. 98(E)",
    date: "2021-02-05",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-98e-20210205-draft.pdf",
  },
  {
    id: "so-648e-20200211",
    number: "S.O. 648(E)",
    date: "2020-02-11",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-648e-20200211.pdf",
    keywords: "section 3(b)(iv)",
  },
  {
    id: "gsr-102e-20200211",
    number: "G.S.R. 102(E)",
    date: "2020-02-11",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-102e-20200211.pdf",
  },
  {
    id: "gsr-797e-20191018-draft",
    number: "G.S.R. 797(E)",
    date: "2019-10-18",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-797e-20191018-draft.pdf",
    keywords: "G.S.R. 102(E) Medical Devices (Amendment) Rules, 2020",
  },
  {
    id: "gsr-787e-20191016",
    number: "G.S.R. 787(E)",
    date: "2019-10-16",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-787e-20191016.pdf",
    keywords: "NABL",
  },
  {
    id: "gsr-652e-20190913",
    number: "G.S.R. 652(E)",
    date: "2019-09-13",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-652e-20190913.pdf",
    keywords: "loan licence",
  },
  {
    id: "gsr-318e-20190418",
    number: "G.S.R. 318(E)",
    date: "2019-04-18",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-318e-20190418.pdf",
  },
  {
    id: "gsr-224e-20190318",
    number: "G.S.R. 224(E)",
    date: "2019-03-18",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-224e-20190318.pdf",
  },
  {
    id: "gsr-188e-20190306-draft",
    number: "G.S.R. 188(E)",
    date: "2019-03-06",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-188e-20190306-draft.pdf",
    keywords: "loan licence G.S.R. 652(E) Medical Devices (Fourth Amendment) Rules, 2019",
  },
  {
    id: "so-775e-20190208",
    number: "S.O. 775(E)",
    date: "2019-02-08",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-775e-20190208.pdf",
  },
  {
    id: "gsr-87e-20190204-draft",
    number: "G.S.R. 87(E)",
    date: "2019-02-04",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-87e-20190204-draft.pdf",
    keywords: "NABL G.S.R. 787(E) Medical Devices (Fifth Amendment) Rules, 2019",
  },
  {
    id: "gsr-30e-20190115",
    number: "G.S.R. 30(E)",
    date: "2019-01-15",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-30e-20190115.pdf",
    keywords: "eIFU",
  },
  {
    id: "gsr-1187e-20181207-draft",
    number: "G.S.R. 1187(E)",
    date: "2018-12-07",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-1187e-20181207-draft.pdf",
    keywords: "G.S.R. 318(E) Medical Devices (Third Amendment) Rules, 2019",
  },
  {
    id: "so-5980e-20181203",
    number: "S.O. 5980(E)",
    date: "2018-12-03",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-5980e-20181203.pdf",
    keywords: "nebuliser BP monitor",
  },
  {
    id: "gsr-848e-20180907-draft",
    number: "G.S.R. 848(E)",
    date: "2018-09-07",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-848e-20180907-draft.pdf",
    keywords: "eIFU G.S.R. 30(E) Medical Devices (Amendment) Rules, 2019",
  },
  {
    id: "gsr-729e-20180801",
    number: "G.S.R. 729(E)",
    date: "2018-08-01",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-729e-20180801.pdf",
    keywords: "IVD",
  },
  {
    id: "gsr-660e-20180719-draft",
    number: "G.S.R. 660(E)",
    date: "2018-07-19",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-660e-20180719-draft.pdf",
    keywords: "G.S.R. 224(E) Medical Devices (Second Amendment) Rules, 2019",
  },
  {
    id: "so-3400e-20180711",
    number: "S.O. 3400(E)",
    date: "2018-07-11",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-3400e-20180711.pdf",
  },
  {
    id: "so-2237e-20180601",
    number: "S.O. 2237(E)",
    date: "2018-06-01",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "so-2237e-20180601.pdf",
    keywords: "CMDTL",
  },
  {
    id: "gsr-412e-20180427-draft",
    number: "G.S.R. 412(E)",
    date: "2018-04-27",
    category: "cdsco",
    kind: "notification",
    status: "draft",
    title: "gsr-412e-20180427-draft.pdf",
    keywords: "G.S.R. 729(E) IVD",
  },
  {
    id: "gsr-76e-20180209",
    number: "G.S.R. 76",
    date: "2018-03-07",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-76e-20180209.pdf",
  },
  {
    id: "gsr-78e-20170131",
    number: "G.S.R. 78(E)",
    date: "2017-01-31",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-78e-20170131.pdf",
    keywords: "MDR 2017",
  },
  {
    id: "gsr-640e-20160629",
    number: "G.S.R. 640(E)",
    date: "2016-06-29",
    category: "cdsco",
    kind: "notification",
    status: "final",
    title: "gsr-640e-20160629.pdf",
    keywords: "Schedule M3 QMS",
  },
  {
    id: "checklist-checklist-for-form-md-22md",
    category: "cdsco",
    kind: "checklist",
    status: "final",
    title: "checklist-checklist-for-form-md-22md.pdf",
  },
  {
    id: "guidance-chapter-30-2026htsrev19",
    category: "general",
    kind: "reference",
    status: "final",
    title: "guidance-chapter-30-2026htsrev19.pdf",
    keywords: "HTSUS HS code",
  },
  {
    id: "guidance-clinicalgcpguide",
    category: "cdsco",
    kind: "guidance",
    status: "final",
    title: "guidance-clinicalgcpguide.pdf",
    keywords: "Indian GCP",
  },
  {
    id: "guidance-draft-gdp-guidance-document",
    category: "cdsco",
    kind: "guidance",
    status: "draft",
    title: "guidance-draft-gdp-guidance-document.pdf",
  },
];

/** Which entry of TYPES a document sits under. */
export function typeOf(r: Pick<Resource, "kind" | "status">): TypeId {
  if (r.kind === "notification") return r.status === "draft" ? "draft" : "final";
  if (r.kind === "circular") return "guidance";
  return r.kind;
}

export type CategoryFilter = CategoryId | "all";
export type TypeFilter = TypeId | "all";

export function matchesFilters(r: Resource, category: CategoryFilter, type: TypeFilter): boolean {
  return (category === "all" || r.category === category) && (type === "all" || typeOf(r) === type);
}

/**
 * How many documents each filter option would show. A group's counts follow the
 * other group's selection, not its own, so they say what picking an option would
 * give. Every option is present, including those with no documents yet.
 */
export function filterCounts(
  list: readonly Resource[],
  category: CategoryFilter,
  type: TypeFilter,
): { categories: Record<CategoryFilter, number>; types: Record<TypeFilter, number> } {
  const count = (c: CategoryFilter, t: TypeFilter) =>
    list.filter((r) => matchesFilters(r, c, t)).length;
  return {
    categories: Object.fromEntries(CATEGORIES.map((c) => [c.id, count(c.id, type)])) as Record<
      CategoryFilter,
      number
    >,
    types: Object.fromEntries(TYPES.map((t) => [t.id, count(category, t.id)])) as Record<
      TypeFilter,
      number
    >,
  };
}

/** Newest first; undated documents last, in id order so the list is stable. */
export function byNewest(a: Resource, b: Resource): number {
  if (a.date && b.date) return b.date.localeCompare(a.date) || a.id.localeCompare(b.id);
  if (a.date || b.date) return a.date ? -1 : 1;
  return a.id.localeCompare(b.id);
}

export const docPath = (id: string) => `/resources/${id}`;
export const pdfPath = (id: string) => `/docs/${id}.pdf`;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2017-01-31" -> "31 Jan 2017". Done by hand so server and browser always agree. */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** The fields search treats as the document's own description, ranked above body text. */
export function catalogText(r: Resource): string {
  // "GSR 78(E)" too, for visitors who leave out the dots.
  const bare = r.number?.replace(/\./g, "");
  return [r.number, bare, r.title, r.keywords].filter(Boolean).join(" \u2022 ");
}

/** Number if there is one, otherwise the title: used in breadcrumbs. */
export function shortName(r: Resource): string {
  return r.number ?? r.title;
}

/** The document page's <title>. Unique per document (the build checks title + number). */
export function pageTitle(r: Resource): string {
  return `${r.title}${r.number ? ` (${r.number})` : ""} | Emerging Sigma Consulting`;
}

/**
 * The document page's meta description, filled from a template because the
 * library has no hand-written summaries. The template wording needs the owner's
 * approval before release (SPEC.md, C1).
 */
export function pageDescription(r: Resource): string {
  const kind = KIND_TAGS[r.kind];
  const label = r.status === "draft" ? `Draft ${kind.toLowerCase()}` : kind;
  const ref = [r.number, formatDate(r.date)].filter(Boolean).join(", ");
  return `${label}${ref ? ` ${ref}` : ""}: ${r.title}. Read the original document and search its full text.`;
}
