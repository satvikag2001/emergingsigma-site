import type { Metadata } from "next";

export const SITE_URL = "https://emergingsigma.com";
export const SITE_NAME = "Emerging Sigma Consulting";

const OG_IMAGE = {
  url: "/assets/og-image.png",
  width: 1200,
  height: 630,
  alt: "Emerging Sigma Consulting: Turning Your Innovation into Market Access",
};

type PageMeta = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Becomes the canonical and og:url. Omitted on the 404. */
  path?: string;
  /** Keep the page out of search results. The 404 gets this from Next.js itself. */
  noindex?: boolean;
};

/**
 * Every page carries the same tag set: canonical, Open Graph and Twitter card,
 * with the social title and description mirroring the page's own. Pages are
 * indexable unless marked noindex, which needs no tag of its own.
 * Relative URLs resolve against metadataBase in app/layout.tsx.
 */
export function pageMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  return {
    title,
    description,
    ...(path && { alternates: { canonical: path } }),
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      ...(path && { url: path }),
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
