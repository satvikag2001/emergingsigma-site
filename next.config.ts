import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML/CSS/JS to out/, which GitHub
// Pages serves as before. No server runs anywhere.
const nextConfig: NextConfig = {
  output: "export",
  // Pages are written as about.html rather than about/index.html, so the old
  // .html URLs keep resolving and GitHub Pages serves /about from the same file.
  trailingSlash: false,
  images: { unoptimized: true },
};

export default nextConfig;
