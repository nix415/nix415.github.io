import { useEffect, useState } from "react";

/**
 * Returns a number in [0, 1] representing how far through the page the user
 * has scrolled. Tracks via rAF-gated listener so there's one DOM read per
 * frame regardless of scroll velocity.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight || 0) - window.innerHeight;
      const y = window.scrollY || 0;
      const p = max <= 0 ? 0 : Math.min(1, Math.max(0, y / max));
      setProgress(p);
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
  }, []);

  return progress;
}
