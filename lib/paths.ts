/**
 * Old links and bookmarks still arrive as /about.html or /index.html, and GitHub
 * Pages serves the same file either way. Fold them onto the route path so nav
 * highlighting works whichever form the visitor came in on.
 */
export function normalizePath(pathname: string | null): string {
  let p = pathname || "/";
  p = p.replace(/\.html$/, "");
  p = p.replace(/\/index$/, "/");
  if (p.length > 1) p = p.replace(/\/$/, "");
  return p || "/";
}
