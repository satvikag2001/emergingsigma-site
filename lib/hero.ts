import { preload } from "react-dom";

/**
 * The hero photo is a CSS background, so on its own the browser finds it only
 * after the stylesheet has loaded. Naming it in the page's <head> starts the
 * download alongside the CSS; it is usually the largest thing above the fold.
 *
 * `file` is the photo's name in public/assets/img without an extension, and
 * must match the url() the page's hero class uses in globals.css.
 */
export function preloadHero(file: string) {
  preload(`/assets/img/${file}.webp`, { as: "image", fetchPriority: "high" });
}
