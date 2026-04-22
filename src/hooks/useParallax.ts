import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a translateY value (in px) for a gentle parallax
 * effect tied to the element's viewport offset.
 *
 * The element rises (negative translateY) as it scrolls up through the
 * viewport and sinks as it scrolls down. Range is clamped to ±`range`.
 */
export function useParallax<T extends HTMLElement>(range = 16) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let frame = 0;
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when centered, ±1 at top/bottom of viewport
      const center = rect.top + rect.height / 2;
      const t = (center - vh / 2) / (vh / 2);
      const clamped = Math.max(-1, Math.min(1, t));
      setOffset(-clamped * range);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [range]);

  return { ref, offset } as const;
}
