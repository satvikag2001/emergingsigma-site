"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1800;

/**
 * A headline figure that counts up from zero the first time it scrolls into
 * view. The final value is what renders first, so without JavaScript, or with
 * reduced motion, the number is simply there.
 */
export default function StatNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || !("IntersectionObserver" in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / DURATION, 1);
          // Ease out, so the count decelerates into its final value.
          setValue(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span className="stat-num" ref={ref}>
      {Math.floor(value)}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
