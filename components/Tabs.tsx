"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/* Two tab styles share this: "seg" (Start-ups / Small / Large manufacturing on
   the service pages) and "lvl" (the four training levels). Class names follow
   the stylesheet: .seg-tabs/.seg-btn/.seg-panel and .lvl-tabs/.lvl-btn/.lvl-panel.
   Every panel stays in the page, hidden by CSS, so all of it is indexable. */

type Kind = "seg" | "lvl";

const TabsContext = createContext<{ kind: Kind; active: string } | null>(null);

type TabsProps = {
  kind: Kind;
  tabs: { id: string; label: ReactNode }[];
  /** One <TabPanel> per tab, in the same order. */
  children: ReactNode;
};

export function Tabs({ kind, tabs, children }: TabsProps) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <TabsContext.Provider value={{ kind, active }}>
      <div className={`${kind}-tabs`} role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${kind}-tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls={`${kind}-${t.id}`}
            className={`${kind}-btn${t.id === active ? " active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {children}
    </TabsContext.Provider>
  );
}

export function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("<TabPanel> must sit inside <Tabs>");
  const { kind, active } = ctx;

  return (
    <div
      className={`${kind}-panel${id === active ? " active" : ""}`}
      id={`${kind}-${id}`}
      role="tabpanel"
      aria-labelledby={`${kind}-tab-${id}`}
    >
      {children}
    </div>
  );
}
