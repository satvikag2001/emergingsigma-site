import Link from "next/link";
import { Fragment } from "react";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/metadata";

type Crumb = { name: string; href: string };

/**
 * The trail under the header, plus the same trail as structured data so Google
 * can show it in results instead of a bare URL. `trail` starts after Home and
 * ends with the current page, whose `href` is used only for the structured data.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...trail];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.href,
    })),
  };

  return (
    <>
      <JsonLd data={data} />
      <div className="breadcrumb">
        <div className="wrap">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            {trail.map((c, i) => (
              <Fragment key={c.href}>
                <span>›</span>
                {i < trail.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span>{c.name}</span>}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
