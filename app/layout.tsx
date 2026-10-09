import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Analytics from "@/components/Analytics";
import QuickEnquiry from "@/components/QuickEnquiry";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d5246",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // js-motion is added to <html> before hydration, hence the warning opt-out.
    // data-scroll-behavior lets Next.js switch off the stylesheet's smooth
    // scrolling while it jumps to the top of a newly opened page; otherwise the
    // jump animates and it settles with the page top under the sticky header.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Set before first paint: the reveal and hero-entrance styles are
            scoped to .js-motion, so if scripts never run, nothing is hidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js-motion")',
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <QuickEnquiry />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
