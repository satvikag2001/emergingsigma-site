import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { SITE_URL } from "@/lib/metadata";

// Written to out/sitemap.xml at build time. Add a page here when you add one.
export const dynamic = "force-static";

type Page = {
  path: string;
  file: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const PAGES: Page[] = [
  { path: "/", file: "app/page.tsx", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", file: "app/services/page.tsx", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", file: "app/contact/page.tsx", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", file: "app/about/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/regulatory",
    file: "app/regulatory/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/quality-management-system",
    file: "app/quality-management-system/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/product-quality",
    file: "app/product-quality/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/supplier-quality",
    file: "app/supplier-quality/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/warehouse-logistics-quality",
    file: "app/warehouse-logistics-quality/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/equipment-qualification",
    file: "app/equipment-qualification/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/digitalization",
    file: "app/digitalization/page.tsx",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/training", file: "app/training/page.tsx", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", file: "app/resources/page.tsx", changeFrequency: "weekly", priority: 0.8 },
  {
    path: "/privacy-policy",
    file: "app/privacy-policy/page.tsx",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// The date of the last commit that touched the page's file, so search engines
// see a page as changed only when it really was. Falls back to today outside git.
function lastModified(file: string): Date {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {}
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: SITE_URL + p.path,
    lastModified: lastModified(p.file),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
