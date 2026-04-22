import type { CSSProperties } from "react";
import { SITE } from "../data/site";
import HeroVisual from "./HeroVisual";
import Currently from "./Currently";

/**
 * Editorial hero — masthead chrome on top, split-text headline with
 * a mustard-marker highlight, a short standfirst, and a Currently
 * ticker in the lower-left. HeroVisual (the cover plate) sits on
 * the right.
 */
export default function Hero() {
  const { headlineWords, markerPhrase, standfirst } = SITE.hero;

  // Walk through the words and mark the phrase that gets highlighted.
  // We match the phrase as a substring of the joined sentence so minor
  // punctuation variants still work.
  const joined = headlineWords.join(" ");
  const start = joined.toLowerCase().indexOf(markerPhrase.toLowerCase());
  const end = start + markerPhrase.length;

  // Determine, per-word, whether its characters fall inside the marker span.
  let cursor = 0;
  const decorated = headlineWords.map((w) => {
    const wStart = cursor;
    const wEnd = cursor + w.length;
    cursor = wEnd + 1; // +1 for the space
    const isMarked = wStart >= start && wEnd <= end;
    return { word: w, isMarked };
  });

  return (
    <section id="home" className="relative scroll-mt-24">
      {/* Masthead rule */}
      <div className="border-b border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          <span>A small portfolio zine</span>
          <span>{SITE.issue.subject}</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-16">
        <div className="md:grid md:grid-cols-12 md:gap-10 md:items-start">
          {/* Cover plate — right column, floats up on md+ */}
          <div
            className="order-1 md:order-none md:col-start-8 md:col-span-5 relative hero-rise"
            style={{ "--hero-delay": "260ms" } as CSSProperties}
          >
            <HeroVisual />
          </div>

          {/* Text column */}
          <div className="order-2 md:order-none md:col-start-1 md:col-span-7 mt-10 md:mt-0 relative z-10">
            <p
              className="mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-muted)] mb-6 hero-rise"
              style={{ "--hero-delay": "0ms" } as CSSProperties}
            >
              Issue {SITE.issue.number} · The Curiosity Edition
            </p>

            <h1 className="display text-5xl md:text-[4.25rem] leading-[1.02] tracking-tight max-w-[36rem]">
              {decorated.map(({ word, isMarked }, i) => (
                <span
                  key={`${word}-${i}`}
                  className="word"
                  style={{ animationDelay: `${120 + i * 45}ms` }}
                >
                  {isMarked ? <span className="marker">{word}</span> : word}
                  {i < decorated.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>

            <p
              className="mt-8 text-base md:text-lg leading-relaxed text-[color:var(--color-muted)] max-w-[34rem] hero-rise"
              style={{ "--hero-delay": "900ms" } as CSSProperties}
            >
              {standfirst}
            </p>

            <div
              className="mt-10 hero-rise"
              style={{ "--hero-delay": "1100ms" } as CSSProperties}
            >
              <Currently />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
