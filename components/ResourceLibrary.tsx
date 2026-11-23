"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  CATEGORIES,
  CATEGORY_TAGS,
  KIND_TAGS,
  RESOURCES,
  TYPES,
  byNewest,
  catalogText,
  docPath,
  filterCounts,
  formatDate,
  matchesFilters,
  pdfPath,
  type CategoryFilter,
  type Resource,
  type TypeFilter,
} from "@/lib/resources";
import {
  buildFragment,
  makeSnippets,
  readFragment,
  search,
  type DocHit,
  type SearchResult,
  type Snippet,
} from "@/lib/search";

const SORTED = [...RESOURCES].sort(byNewest);
const BY_ID = new Map(SORTED.map((r) => [r.id, r]));
const CATALOG = new Map(SORTED.map((r) => [r.id, catalogText(r)]));
const CATEGORY_IDS = new Set<string>(CATEGORIES.map((c) => c.id));
const TYPE_IDS = new Set<string>(TYPES.map((t) => t.id));

const INDEX_URL = "/search/index.json";
const DEBOUNCE_MS = 150;
// Results render in batches of roughly this many snippets, so a common word with
// thousands of matches cannot freeze the page. Every match stays reachable.
const BATCH = 150;

type PagesById = Record<string, string[]>;
type IndexState = "idle" | "loading" | "ready" | "failed";

// Fetched once per visit and only when someone starts searching, never on load.
let indexRequest: Promise<PagesById> | null = null;
function loadIndex(): Promise<PagesById> {
  indexRequest ??= fetch(INDEX_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data: { docs: PagesById }) => data.docs)
    .catch((err) => {
      indexRequest = null; // let a later search try again
      throw err;
    });
  return indexRequest;
}

const plural = (n: number, one: string, many: string) =>
  `${n.toLocaleString("en-IN")} ${n === 1 ? one : many}`;

function Marked({ snippet }: { snippet: Snippet }) {
  const parts: ReactNode[] = [];
  let at = 0;
  snippet.marks.forEach(([s, e], i) => {
    if (s > at) parts.push(snippet.text.slice(at, s));
    parts.push(<mark key={i}>{snippet.text.slice(s, e)}</mark>);
    at = e;
  });
  if (at < snippet.text.length) parts.push(snippet.text.slice(at));
  return (
    <>
      {snippet.lead && "… "}
      {parts}
      {snippet.trail && " …"}
    </>
  );
}

function Tags({ r }: { r: Resource }) {
  return (
    <>
      <span className="tag tag-g">{KIND_TAGS[r.kind]}</span>
      {r.status === "draft" && <span className="tag tag-d">Draft</span>}
    </>
  );
}

function Meta({ r }: { r: Resource }) {
  return <>{[r.number, formatDate(r.date)].filter(Boolean).join(" · ")}</>;
}

type HitProps = {
  hit: DocHit;
  pages: DocHit["pages"];
  texts: string[] | undefined;
  query: string;
};

/** One document in the results, with every matching page and every occurrence. */
function DocResult({ hit, pages, texts, query }: HitProps) {
  const r = BY_ID.get(hit.id)!;
  return (
    <li className="res-hit">
      <div className="res-hit-head">
        <div>
          <a className="res-hit-title" href={docPath(r.id) + buildFragment({ q: query })}>
            {r.title}
          </a>
          <div className="res-hit-meta">
            <Meta r={r} /> <Tags r={r} />
            {hit.count > 0 && (
              <span className="res-hit-count">{plural(hit.count, "match", "matches")}</span>
            )}
          </div>
        </div>
        <div className="res-dl">
          <a href={pdfPath(r.id)}>⬇ PDF</a>
        </div>
      </div>
      {pages.length > 0 && texts && (
        <ul className="res-pages">
          {pages.map((p) => {
            const href = docPath(r.id) + buildFragment({ page: p.page, q: query });
            return (
              <li key={p.page} className="res-page">
                <a className="res-page-no" href={href}>
                  p.&nbsp;{p.page}
                </a>
                <ul className="res-snips">
                  {makeSnippets(texts[p.page - 1], p.occurrences).map((s, i) => (
                    <li key={i}>
                      <a href={href}>
                        <Marked snippet={s} />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

/** Renders hits in order until `budget` snippets have been shown; returns what is left. */
function renderHits(
  hits: DocHit[],
  budget: number,
  index: PagesById | null,
  query: string,
): { nodes: ReactNode[]; left: number; hidden: number } {
  const nodes: ReactNode[] = [];
  let left = budget;
  let hidden = 0;
  for (const hit of hits) {
    if (left <= 0) {
      hidden += Math.max(1, hit.pages.length);
      continue;
    }
    const texts = index?.[hit.id];
    const shown: DocHit["pages"] = [];
    for (const p of hit.pages) {
      if (left <= 0) {
        hidden++;
        continue;
      }
      shown.push(p);
      // Snippets per page are roughly occurrences, merged when close together.
      left -= Math.max(1, Math.min(p.occurrences.length, 12));
    }
    if (hit.pages.length === 0) left--;
    nodes.push(<DocResult key={hit.id} hit={hit} pages={shown} texts={texts} query={query} />);
  }
  return { nodes, left, hidden };
}

/** Category and type filters, the document list, and full-text search over every page. */
export default function ResourceLibrary() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [type, setType] = useState<TypeFilter>("all");
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [indexState, setIndexState] = useState<IndexState>("idle");
  const [index, setIndex] = useState<PagesById | null>(null);
  const [budget, setBudget] = useState(BATCH);
  const mirrored = useRef(false);
  const moreRef = useRef<HTMLButtonElement>(null);

  const ensureIndex = useCallback(() => {
    if (indexState === "loading" || indexState === "ready") return;
    setIndexState("loading");
    loadIndex().then(
      (docs) => {
        setIndex(docs);
        setIndexState("ready");
      },
      () => setIndexState("failed"),
    );
  }, [indexState]);

  // Restore the query and filters from the fragment: Back from a document page,
  // or a shared link.
  useEffect(() => {
    const f = readFragment(window.location.hash);
    if (f.cat && CATEGORY_IDS.has(f.cat)) setCategory(f.cat as CategoryFilter);
    if (f.type && TYPE_IDS.has(f.type)) setType(f.type as TypeFilter);
    if (f.q) {
      setInput(f.q);
      setQuery(f.q);
      ensureIndex();
    }
    // Runs once on arrival; later changes go the other way, state to fragment.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setQuery(input), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [input]);

  // Mirror state into the fragment. The fragment never reaches the server or
  // analytics, and replaceState keeps typing out of the Back history.
  useEffect(() => {
    if (!mirrored.current) {
      mirrored.current = true; // the first run would only wipe what restore just read
      return;
    }
    const hash = buildFragment({
      q: query.trim(),
      cat: category === "all" ? "" : category,
      type: type === "all" ? "" : type,
    });
    if (hash !== window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + hash);
    }
  }, [query, category, type]);

  const visible = useMemo(
    () => SORTED.filter((r) => matchesFilters(r, category, type)),
    [category, type],
  );

  const result: SearchResult | null = useMemo(
    () =>
      search(
        visible.map((r) => ({ id: r.id, catalog: CATALOG.get(r.id)!, pages: index?.[r.id] ?? [] })),
        query,
      ),
    [visible, query, index],
  );

  useEffect(() => setBudget(BATCH), [result]);

  const full = result ? renderHits(result.full, budget, index, query) : null;
  const partial = result && full ? renderHits(result.partial, full.left, index, query) : null;
  const hidden = (full?.hidden ?? 0) + (partial?.hidden ?? 0);

  // Load the next batch as the "Show more" button scrolls into view; the button
  // itself still works for keyboard users and when observers are unavailable.
  useEffect(() => {
    const el = moreRef.current;
    if (!el || hidden === 0 || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setBudget((b) => b + BATCH);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hidden, budget]);

  const counts = useMemo(() => filterCounts(SORTED, category, type), [category, type]);

  let status: string;
  if (!result) {
    status = `Showing ${visible.length} resource${visible.length !== 1 ? "s" : ""}`;
  } else if (indexState === "loading" || (indexState === "idle" && !index)) {
    status = "Loading the full text of all documents…";
  } else {
    status = `${plural(result.matches, "match", "matches")} on ${plural(result.pages, "page", "pages")} in ${plural(result.full.length, "document", "documents")}`;
    if (result.partialPages > 0) {
      status += `; ${plural(result.partialPages, "more page has", "more pages have")} some of your words`;
    }
  }

  let body: ReactNode;
  if (!result) {
    body = (
      <>
        <div className="res-table">
          <div className="res-thead">
            <span>Date</span>
            <span>Title / Description</span>
            <span>Category</span>
            <span>Type</span>
            <span>Download</span>
          </div>
          <div>
            {visible.map((r) => (
              <div className="res-row" key={r.id}>
                <div className="res-date">{formatDate(r.date)}</div>
                <div className="res-title">
                  <Link href={docPath(r.id)}>{r.title}</Link>
                  {r.number && <small>{r.number}</small>}
                </div>
                <div>
                  <span className="tag">{CATEGORY_TAGS[r.category]}</span>
                </div>
                <div className="res-tags">
                  <Tags r={r} />
                </div>
                <div className="res-dl">
                  <a href={pdfPath(r.id)}>⬇ PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {visible.length === 0 && (
          <div className="res-empty">
            <p>There are no documents in this category yet.</p>
          </div>
        )}
      </>
    );
  } else if (full && partial) {
    body = (
      <>
        {indexState === "failed" && (
          <p className="res-note" role="status">
            Full-text search could not be loaded, so only titles and numbers were searched.
          </p>
        )}
        {result.full.length > 0 && <ol className="res-hits">{full.nodes}</ol>}
        {partial.nodes.length > 0 && (
          <>
            <h2 className="res-partial-title">Pages with some of your words</h2>
            <ol className="res-hits">{partial.nodes}</ol>
          </>
        )}
        {hidden > 0 && (
          <button
            ref={moreRef}
            type="button"
            className="btn btn-ghost res-more"
            onClick={() => setBudget((b) => b + BATCH)}
          >
            Show more results ({plural(hidden, "page", "pages")} left)
          </button>
        )}
        {result.full.length === 0 && result.partial.length === 0 && indexState !== "loading" && (
          <div className="res-empty">
            <p>No resources found matching your search.</p>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="res-layout">
      <div className="res-sidebar">
        <div className="res-sidebar-title" id="res-cat-title">
          Filter by Category
        </div>
        <div className="res-filter-group" role="group" aria-labelledby="res-cat-title">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`res-filter${category === c.id ? " active" : ""}`}
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label} <span className="cnt">{counts.categories[c.id]}</span>
            </button>
          ))}
        </div>
        <div className="res-sidebar-title" id="res-type-title">
          Filter by Type
        </div>
        <div className="res-filter-group" role="group" aria-labelledby="res-type-title">
          {TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`res-filter${type === t.id ? " active" : ""}`}
              aria-pressed={type === t.id}
              onClick={() => setType(t.id)}
            >
              {t.label} <span className="cnt">{counts.types[t.id]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="res-main">
        <input
          className="res-search"
          type="search"
          enterKeyHint="search"
          placeholder="Search resources by title or keyword…"
          aria-label="Search resources"
          value={input}
          onFocus={ensureIndex}
          onChange={(e) => {
            ensureIndex();
            setInput(e.target.value);
          }}
        />
        <div className="res-status" aria-live="polite">
          {status}
        </div>
        {body}
      </div>
    </div>
  );
}
