"use client";

import { useState } from "react";
import { CATEGORIES, RESOURCES, type Resource } from "@/lib/resources";

type Filter = (typeof CATEGORIES)[number]["id"];

function haystack(r: Resource) {
  return [r.keywords, r.date, r.title, r.summary, r.tag, r.type, "PDF"].join(" ").toLowerCase();
}

/** Category filter and free-text search over lib/resources.ts. */
export default function ResourceLibrary() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = RESOURCES.filter(
    (r) => (filter === "all" || r.category === filter) && (!q || haystack(r).includes(q)),
  );
  const count = (id: Filter) =>
    id === "all" ? RESOURCES.length : RESOURCES.filter((r) => r.category === id).length;

  return (
    <div className="res-layout">
      <div className="res-sidebar">
        <div className="res-sidebar-title">Filter by Category</div>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`res-filter${filter === c.id ? " active" : ""}`}
            aria-pressed={filter === c.id}
            onClick={() => setFilter(c.id)}
          >
            {c.label} <span className="cnt">{count(c.id)}</span>
          </button>
        ))}
      </div>
      <div>
        <input
          className="res-search"
          type="text"
          placeholder="Search resources by title or keyword…"
          aria-label="Search resources"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          style={{ fontSize: "13px", color: "var(--gray4)", marginBottom: "14px" }}
          aria-live="polite"
        >
          Showing {visible.length} resource{visible.length !== 1 ? "s" : ""}
        </div>
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
              <div className="res-row" key={r.title}>
                <div className="res-date">{r.date}</div>
                <div className="res-title">
                  {r.title}
                  <small>{r.summary}</small>
                </div>
                <div>
                  <span className="tag">{r.tag}</span>
                </div>
                <div>
                  <span className="tag tag-g">{r.type}</span>
                </div>
                <div className="res-dl">
                  <a href={r.href}>⬇ PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {visible.length === 0 && (
          <div style={{ padding: "48px", textAlign: "center", color: "var(--gray4)" }}>
            <p>No resources found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
