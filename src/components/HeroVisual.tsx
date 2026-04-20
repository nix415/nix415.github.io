/**
 * HeroVisual
 *
 * A calm, on-brand animated graphic that fills the right side of the hero.
 * - A grid of soft pulsing dots in the background
 * - A row of "growth" bars that gently rise/fall on a loop
 * - A subtle accent line that draws across, like a trend line
 *
 * Pure CSS animations, no JS interval. Respects prefers-reduced-motion.
 */
export default function HeroVisual() {
  const bars = [
    { peak: 38, base: 22, dur: 3.6, delay: 0.0 },
    { peak: 64, base: 34, dur: 4.2, delay: 0.25 },
    { peak: 52, base: 28, dur: 3.2, delay: 0.5 },
    { peak: 88, base: 48, dur: 4.6, delay: 0.15 },
    { peak: 70, base: 40, dur: 3.8, delay: 0.4 },
    { peak: 94, base: 58, dur: 5.0, delay: 0.6 },
    { peak: 76, base: 46, dur: 4.0, delay: 0.3 },
  ];

  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
      {/* Soft background gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 20%, rgba(194,91,63,0.12), transparent 60%), radial-gradient(100% 70% at 20% 90%, rgba(31,29,26,0.06), transparent 60%)",
        }}
      />

      {/* Pulsing dot grid */}
      <div className="absolute inset-0 p-8 grid grid-cols-7 grid-rows-9 gap-3 opacity-60">
        {Array.from({ length: 63 }).map((_, i) => (
          <span
            key={i}
            className="hv-dot rounded-full bg-[color:var(--color-ink)]/15"
            style={{
              animationDelay: `${(i % 7) * 0.18 + Math.floor(i / 7) * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Bars row — sits at the bottom like a chart */}
      <div className="absolute inset-x-0 bottom-0 px-8 pb-10 flex items-end justify-center gap-3 h-[62%]">
        {bars.map((b, i) => (
          <span
            key={i}
            className="hv-bar relative w-7 rounded-t-md bg-[color:var(--color-accent)]/85"
            style={{
              ["--peak" as never]: `${b.peak}%`,
              ["--base" as never]: `${b.base}%`,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Trend line that slowly draws */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M 4 78 C 18 70, 30 74, 42 60 S 70 32, 96 18"
          fill="none"
          stroke="var(--color-ink)"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeLinecap="round"
          className="hv-trend"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Top label badge — adds a little context */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-[color:var(--color-muted)]">
        <span>Growth</span>
        <span className="hv-pulse inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
          live
        </span>
      </div>
    </div>
  );
}
