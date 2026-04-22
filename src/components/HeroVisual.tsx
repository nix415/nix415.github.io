import { useRef, type MouseEvent } from "react";
import { SITE } from "../data/site";

/**
 * Editorial "cover plate" — the zine's inside-front-cover artwork.
 *
 * - A huge serif "N" at the center like a masthead initial
 * - A slow-spinning disc behind it (the "sun")
 * - Vertical tick marks on the side pulsing in sequence
 * - A cursor-following soft spotlight that makes the paper feel alive
 *
 * Pure CSS animations + one cheap mousemove handler. Respects reduced motion.
 */
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--sy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 md:ml-auto overflow-hidden border border-[color:var(--color-line)] rounded-sm bg-[color:var(--color-surface)]"
    >
      {/* Corner tick marks — paper-cover feel */}
      <div className="pointer-events-none absolute inset-4 border border-[color:var(--color-ink)]/15" />
      <div className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-[color:var(--color-ink)]/30" />
      <div className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-[color:var(--color-ink)]/30" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[color:var(--color-ink)]/30" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[color:var(--color-ink)]/30" />

      {/* Slow-spinning disc (sun) */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="slow-spin relative">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="opacity-80"
            aria-hidden="true"
          >
            <circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.8"
              strokeDasharray="2 5"
            />
            <circle
              cx="150"
              cy="150"
              r="90"
              fill="var(--color-accent)"
              opacity="0.18"
            />
            <circle
              cx="150"
              cy="150"
              r="60"
              fill="none"
              stroke="var(--color-ink)"
              strokeOpacity="0.25"
              strokeWidth="0.6"
            />
            {/* Ray marks around the circumference */}
            {Array.from({ length: 36 }).map((_, i) => {
              const angle = (i * 360) / 36;
              return (
                <line
                  key={i}
                  x1="150"
                  y1="22"
                  x2="150"
                  y2={i % 3 === 0 ? 8 : 16}
                  stroke="var(--color-ink)"
                  strokeOpacity={i % 3 === 0 ? 0.55 : 0.25}
                  strokeWidth="0.8"
                  transform={`rotate(${angle} 150 150)`}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Masthead initial "N." sitting in front of the disc */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="text-center">
          <div
            className="display text-[10rem] md:text-[12rem] leading-none tracking-tight text-[color:var(--color-ink)]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
          >
            N<span className="text-[color:var(--color-accent)]">.</span>
          </div>
          <div className="mono text-[9px] uppercase tracking-[0.35em] text-[color:var(--color-muted)] mt-1">
            A small portfolio zine
          </div>
        </div>
      </div>

      {/* Vertical tick marks, left edge, pulse in sequence */}
      <div className="absolute top-10 bottom-10 left-5 w-px flex flex-col justify-between">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="tick block h-[1px] w-3 bg-[color:var(--color-ink)]"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>

      {/* Bottom metadata */}
      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-[10px] mono uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
        <span>
          {SITE.issue.number} — {SITE.issue.subject}
        </span>
        <span>{SITE.issue.edition}</span>
      </div>

      {/* Cursor spotlight */}
      <div className="spotlight" />
    </div>
  );
}
