"use client";

import { useLayoutEffect } from "react";

/* Scroll reveal and hero parallax. Rendered by app/template.tsx, which mounts
   afresh on every navigation, so each page gets its own pass. It runs as a
   layout effect, before the browser paints the new page, so nothing is seen in
   its final place and then yanked back to animate. */

let hydrated = false;

const reduceMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

/* On the very first load the server-rendered page may already be on screen by
   the time React hydrates. Hiding it then to replay it would flash. */
function alreadyPainted() {
  try {
    if (!PerformanceObserver.supportedEntryTypes?.includes("paint")) return true;
    return performance.getEntriesByName("first-contentful-paint").length > 0;
  } catch {
    return true;
  }
}

/* Targets are derived at runtime rather than hand-tagged, so every page
   behaves the same without touching each one. Each section contributes its
   top-level blocks; any block that is a grid or flex row is replaced by its
   own children so rows cascade instead of appearing as one slab. */
function revealTargets(): HTMLElement[][] {
  const out: HTMLElement[][] = [];
  document
    .querySelectorAll<HTMLElement>("section, .cta-band, .clients-strip, .stats-band, .doc-body")
    .forEach((sec) => {
      if (sec.closest(".hero, .eq-hero")) return; // the hero animates on load, in CSS
      const scope = sec.querySelector<HTMLElement>(":scope > .wrap") || sec;
      Array.from(scope.children).forEach((child) => {
        const el = child as HTMLElement;
        const cs = getComputedStyle(el);
        if (cs.display === "none") return;
        // Expand one level: a multi-child grid/flex row staggers its children.
        const kids = Array.from(el.children) as HTMLElement[];
        if (
          (cs.display === "grid" || cs.display === "flex") &&
          kids.length >= 2 &&
          kids.length <= 24
        ) {
          out.push(kids);
        } else {
          out.push([el]);
        }
      });
    });
  return out;
}

function initReveal(firstLoad: boolean): () => void {
  if (reduceMotion() || !("IntersectionObserver" in window)) return () => {}; // CSS keeps everything visible

  const leaveVisible = firstLoad && alreadyPainted();
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        obs.unobserve(e.target);
      });
    },
    // Fire a little before the element reaches the bottom edge, so the
    // motion reads as anticipation rather than catching up.
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
  );

  /* Split by what is already on screen. Anything below the fold waits for
     the observer; anything visible now plays a cascade, so the page arrives
     rather than appearing fully formed. */
  const h = window.innerHeight || 0;
  const all: HTMLElement[] = [];
  const onscreen: HTMLElement[] = [];
  revealTargets().forEach((group) => {
    group.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const visible = r.top < h && r.bottom > 0;
      if (visible && leaveVisible) return;
      el.classList.add("reveal");
      // Cap the cascade so a long row never feels slow to finish.
      const delay = Math.min(i * 0.07, 0.35);
      if (delay) el.style.setProperty("--rv-delay", delay + "s");
      all.push(el);
      if (visible) onscreen.push(el);
      else obs.observe(el);
    });
  });

  /* Two frames: the first lets the hidden state paint, the second starts
     the transition. Setting both in one frame gets coalesced and the
     element would snap in with no animation at all. */
  let raf2 = 0;
  const raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(() => {
      onscreen.forEach((el, i) => {
        el.style.setProperty("--rv-delay", Math.min(0.05 + i * 0.08, 0.5) + "s");
        el.classList.add("in");
      });
    });
  });

  /* Last resort. If anything visible is still hidden once the page has
     settled, show it. Motion must never cost someone content. */
  let timer = 0;
  const failsafe = () => {
    const vh = window.innerHeight || 0;
    all.forEach((el) => {
      if (el.classList.contains("in")) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        el.classList.add("in");
        obs.unobserve(el);
      }
    });
  };
  const arm = () => {
    timer = window.setTimeout(failsafe, 1200);
  };
  if (document.readyState === "complete") arm();
  else window.addEventListener("load", arm, { once: true });

  return () => {
    obs.disconnect();
    cancelAnimationFrame(raf1);
    cancelAnimationFrame(raf2);
    clearTimeout(timer);
    window.removeEventListener("load", arm);
  };
}

/* Only .hero-bg opts in. The other hero backgrounds run the slowZoom keyframes,
   which own their transform; driving it from here as well would fight them. */
function initParallax(): () => void {
  const heroBg = document.querySelector<HTMLElement>(".hero-bg");
  if (!heroBg || reduceMotion()) return () => {};

  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.pageYOffset;
    if (window.innerWidth <= 900) return;
    const h = heroBg.parentElement?.offsetHeight || 520;
    // Drift is bounded by the slack built into .hero-bg's inset, so the
    // image can never pull away from the edges of the hero.
    if (y < h) heroBg.style.transform = `translate3d(0,${(y * 0.12).toFixed(1)}px,0)`;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  update();
  return () => window.removeEventListener("scroll", onScroll);
}

export default function PageEffects() {
  useLayoutEffect(() => {
    const undoReveal = initReveal(!hydrated);
    const undoParallax = initParallax();
    // Flipped a frame later so React's development double-run of effects
    // still counts as the first load.
    requestAnimationFrame(() => {
      hydrated = true;
    });
    return () => {
      undoReveal();
      undoParallax();
    };
  }, []);

  return null;
}
