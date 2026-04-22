import type { CSSProperties } from "react";

type Props = {
  items: readonly string[];
  cycleSeconds?: number;
  className?: string;
};

/**
 * Single-line "currently" ticker. All entries are stacked in one grid cell
 * and each fades in/out on a shared crossfade keyframe. The CSS handles the
 * cycling; this component just staggers the animation-delay per item.
 */
export default function CurrentlyLine({
  items,
  cycleSeconds,
  className,
}: Props) {
  const count = items.length;
  const total = cycleSeconds ?? count * 7;
  const step = total / count;

  return (
    <div
      className={`relative grid ${className ?? ""}`}
      style={
        {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          minHeight: "1.35em",
        } as CSSProperties
      }
      aria-live="polite"
    >
      {items.map((text, i) => (
        <span
          key={i}
          className="currently-item mono text-[12px] sm:text-[13px] tracking-wide text-[color:var(--color-muted)]"
          style={
            {
              animationDuration: `${total}s`,
              animationDelay: `${i * step}s`,
            } as CSSProperties
          }
        >
          {text}
        </span>
      ))}
    </div>
  );
}
