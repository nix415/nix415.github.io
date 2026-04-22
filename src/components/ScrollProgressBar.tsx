import type { CSSProperties } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

/**
 * Thin ink-colored bar pinned to the top of the viewport that fills
 * left-to-right as the page is scrolled. Uses CSS scaleX so it animates
 * smoothly without layout thrash.
 */
export default function ScrollProgressBar() {
  const p = useScrollProgress();
  return (
    <div
      className="scroll-progress"
      style={{ ["--progress" as never]: p } as CSSProperties}
      aria-hidden="true"
    />
  );
}
