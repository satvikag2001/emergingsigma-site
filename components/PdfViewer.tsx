"use client";

import "pdfjs-dist/web/pdf_viewer.css";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import type { EventBus, PDFViewer } from "pdfjs-dist/web/pdf_viewer.mjs";
import { buildFragment, parseQuery, readFragment, viewerMatches } from "@/lib/search";

// Copied from node_modules by scripts/build-doc-index.mjs; nothing comes from a CDN.
const PDFJS = "/pdfjs/";
const FIND_DEBOUNCE_MS = 250;

type Status = "idle" | "loading" | "ready" | "failed";
type FindInfo = { state: "idle" | "pending" | "found" | "none"; current: number; total: number };
type MatchesCount = { current: number; total: number };

const NO_FIND: FindInfo = { state: "idle", current: 0, total: 0 };

function findLabel(f: FindInfo): string {
  if (f.state === "pending") return "Searching…";
  if (f.state === "none") return "No matches";
  if (f.state === "found" && f.total > 0) {
    return f.current > 0 ? `match ${f.current} of ${f.total}` : `${f.total} matches`;
  }
  return "";
}

/**
 * The original PDF, rendered in the page with PDF.js: continuous scroll,
 * selectable text, page and zoom controls, and find. `#page=N` opens at page N;
 * `#q=...` highlights every match and scrolls to the first one from that page on.
 * PDF.js is loaded only here, on document pages, and only once the page runs.
 */
export default function PdfViewer({ src }: { src: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PDFViewer | null>(null);
  const busRef = useRef<EventBus | null>(null);
  const lastFind = useRef("");
  // PDF.js reports once more after a search is closed; those events are ignored.
  const findActive = useRef(false);
  const [status, setStatus] = useState<Status>("idle");
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState("");
  const [find, setFind] = useState<FindInfo>(NO_FIND);

  const runFind = useCallback((q: string, again: boolean, previous = false) => {
    const bus = busRef.current;
    if (!bus) return;
    lastFind.current = q;
    if (parseQuery(q).length === 0) {
      findActive.current = false;
      bus.dispatch("findbarclose", { source: null });
      setFind(NO_FIND);
      return;
    }
    findActive.current = true;
    bus.dispatch("find", {
      source: null,
      type: again ? "again" : "",
      query: q,
      caseSensitive: false,
      entireWord: false,
      highlightAll: true,
      findPrevious: previous,
      matchDiacritics: false,
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    let task: { destroy(): Promise<void> } | null = null;
    let resize: ResizeObserver | null = null;
    const start = readFragment(window.location.hash);
    const startPage = Math.max(1, parseInt(start.page ?? "1", 10) || 1);
    const startQuery = start.q ?? "";
    lastFind.current = startQuery;
    setQuery(startQuery);
    setStatus("loading");

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        // pdf_viewer.mjs reads the core library from this global.
        (globalThis as { pdfjsLib?: unknown }).pdfjsLib ??= pdfjs;
        pdfjs.GlobalWorkerOptions.workerSrc = `${PDFJS}pdf.worker.min.mjs`;
        const lib = await import("pdfjs-dist/web/pdf_viewer.mjs");
        const container = scrollRef.current;
        const pagesDiv = pagesRef.current;
        if (cancelled || !container || !pagesDiv) return;

        // Site search's matcher, so highlights agree with the result counts; and
        // a scroll that moves only the viewer, never the whole page.
        class LibraryFindController extends lib.PDFFindController {
          match(q: string | string[], pageContent: string) {
            return viewerMatches(Array.isArray(q) ? q.join(" ") : q, pageContent);
          }
          scrollMatchIntoView({
            element = null,
            pageIndex = -1,
            matchIndex = -1,
          }: {
            element?: HTMLElement | null;
            pageIndex?: number;
            matchIndex?: number;
          }) {
            // Same guards as PDF.js's own version (pdfjs-dist is pinned).
            const self = this as unknown as {
              _scrollMatches: boolean;
              _selected: { pageIdx: number; matchIdx: number };
            };
            if (!self._scrollMatches || !element || !container) return;
            if (matchIndex === -1 || matchIndex !== self._selected.matchIdx) return;
            if (pageIndex === -1 || pageIndex !== self._selected.pageIdx) return;
            self._scrollMatches = false;
            const box = container.getBoundingClientRect();
            const el = element.getBoundingClientRect();
            container.scrollTop += el.top - box.top - box.height / 3;
            container.scrollLeft += el.left - box.left - (box.width - el.width) / 2;
          }
        }

        const eventBus = new lib.EventBus();
        const linkService = new lib.PDFLinkService({
          eventBus,
          externalLinkTarget: lib.LinkTarget.BLANK,
          externalLinkRel: "noopener noreferrer nofollow",
        });
        const findController = new LibraryFindController({ eventBus, linkService });
        const viewer = new lib.PDFViewer({
          container,
          viewer: pagesDiv,
          eventBus,
          linkService,
          findController,
        });
        linkService.setViewer(viewer);
        busRef.current = eventBus;
        viewerRef.current = viewer;

        eventBus.on("pagesinit", () => {
          viewer.currentScaleValue = "page-width";
          if (startPage > 1) viewer.currentPageNumber = Math.min(startPage, viewer.pagesCount);
          if (startQuery) runFind(startQuery, false);
          // Arriving from a search result: bring the viewer into view.
          if (start.page || start.q) frameRef.current?.scrollIntoView({ block: "start" });
        });
        eventBus.on("pagechanging", (e: { pageNumber: number }) => {
          setPage(e.pageNumber);
          setPageInput(String(e.pageNumber));
        });
        eventBus.on("updatefindmatchescount", (e: { matchesCount: MatchesCount }) => {
          if (findActive.current) setFind((f) => ({ ...f, ...e.matchesCount }));
        });
        eventBus.on(
          "updatefindcontrolstate",
          (e: { state: number; matchesCount: MatchesCount }) => {
            if (!findActive.current) return;
            const state =
              e.state === lib.FindState.PENDING
                ? "pending"
                : e.state === lib.FindState.NOT_FOUND
                  ? "none"
                  : "found";
            setFind({ state, ...e.matchesCount });
          },
        );

        const loading = pdfjs.getDocument({
          url: src,
          cMapUrl: `${PDFJS}cmaps/`,
          cMapPacked: true,
          standardFontDataUrl: `${PDFJS}standard_fonts/`,
          wasmUrl: `${PDFJS}wasm/`,
          iccUrl: `${PDFJS}iccs/`,
        });
        task = loading;
        const doc = await loading.promise;
        if (cancelled) return;
        viewer.setDocument(doc);
        linkService.setDocument(doc, null);
        setPageCount(doc.numPages);
        setStatus("ready");

        // Keep "fit to width" fitted when the window or a phone's orientation changes.
        resize = new ResizeObserver(() => {
          if (viewer.currentScaleValue === "page-width") viewer.currentScaleValue = "page-width";
        });
        resize.observe(container);
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setStatus("failed");
        }
      }
    })();

    return () => {
      cancelled = true;
      resize?.disconnect();
      viewerRef.current?.setDocument(null);
      void task?.destroy();
      busRef.current = null;
      viewerRef.current = null;
    };
  }, [src, runFind]);

  // Typing in the find box updates highlights in place, and keeps the fragment
  // current so a reload or a shared link shows the same matches.
  useEffect(() => {
    if (status !== "ready" || query === lastFind.current) return;
    const t = setTimeout(() => {
      if (query !== lastFind.current) runFind(query, false); // Enter may have sent it already
      const hash = buildFragment({ q: query.trim() });
      if (hash !== window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + hash);
      }
    }, FIND_DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [query, status, runFind]);

  const goToPage = (e: FormEvent) => {
    e.preventDefault();
    const viewer = viewerRef.current;
    const n = parseInt(pageInput, 10);
    if (viewer && n >= 1 && n <= viewer.pagesCount) viewer.currentPageNumber = n;
    else setPageInput(String(page));
  };

  const ready = status === "ready";
  const label = findLabel(find);

  return (
    <div className="pdfv" ref={frameRef}>
      {status !== "idle" && (
        <div className="pdfv-bar" role="toolbar" aria-label="Document controls">
          <div className="pdfv-group">
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Previous page"
              title="Previous page"
              disabled={!ready || page <= 1}
              onClick={() => viewerRef.current?.previousPage()}
            >
              {"‹"}
            </button>
            <form className="pdfv-pageform" onSubmit={goToPage}>
              <label htmlFor="pdfv-page">Page</label>
              <input
                id="pdfv-page"
                className="pdfv-pageinput"
                inputMode="numeric"
                value={pageInput}
                disabled={!ready}
                onChange={(e) => setPageInput(e.target.value)}
                onBlur={goToPage}
              />
              <span>of {pageCount || "…"}</span>
            </form>
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Next page"
              title="Next page"
              disabled={!ready || page >= pageCount}
              onClick={() => viewerRef.current?.nextPage()}
            >
              {"›"}
            </button>
          </div>
          <div className="pdfv-group">
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Zoom out"
              title="Zoom out"
              disabled={!ready}
              onClick={() => viewerRef.current?.decreaseScale()}
            >
              {"−"}
            </button>
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Zoom in"
              title="Zoom in"
              disabled={!ready}
              onClick={() => viewerRef.current?.increaseScale()}
            >
              +
            </button>
            <button
              type="button"
              className="pdfv-btn pdfv-text"
              disabled={!ready}
              onClick={() => {
                if (viewerRef.current) viewerRef.current.currentScaleValue = "page-width";
              }}
            >
              Fit to width
            </button>
          </div>
          <div className="pdfv-group pdfv-find">
            <input
              type="search"
              className="pdfv-findinput"
              placeholder="Find in this document"
              aria-label="Find in this document"
              enterKeyHint="search"
              value={query}
              disabled={!ready}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                e.preventDefault();
                runFind(query, query === lastFind.current, e.shiftKey);
              }}
            />
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Previous match"
              title="Previous match"
              disabled={!ready || find.total === 0}
              onClick={() => runFind(query, true, true)}
            >
              {"↑"}
            </button>
            <button
              type="button"
              className="pdfv-btn"
              aria-label="Next match"
              title="Next match"
              disabled={!ready || find.total === 0}
              onClick={() => runFind(query, true)}
            >
              {"↓"}
            </button>
            <span className="pdfv-count" aria-live="polite">
              {label}
            </span>
          </div>
        </div>
      )}
      <div className="pdfv-frame">
        <div
          className="pdfv-scroll"
          ref={scrollRef}
          tabIndex={0}
          role="region"
          aria-label="Document pages"
        >
          <div className="pdfViewer" ref={pagesRef} />
        </div>
        {status === "loading" && <p className="pdfv-msg">Loading the document{"…"}</p>}
        {status === "failed" && (
          <p className="pdfv-msg">
            The document could not be shown here. <a href={src}>Open the original PDF</a>.
          </p>
        )}
        <noscript>
          <p className="pdfv-msg">
            The document viewer needs JavaScript. <a href={src}>Open the original PDF</a>.
          </p>
        </noscript>
      </div>
    </div>
  );
}
