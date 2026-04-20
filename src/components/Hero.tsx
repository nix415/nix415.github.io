import type { CSSProperties } from "react";
import { SITE } from "../data/site";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { headline } = SITE.hero;

  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-6 pt-16 pb-24 scroll-mt-24"
    >
      <div className="md:grid md:grid-cols-12 md:items-center md:gap-8">
        {/* Animated visual — replaces the headshot */}
        <div
          className="
            order-1 md:order-none
            md:col-start-8 md:col-span-5 md:row-start-1
            relative hero-rise
          "
          style={{ "--hero-delay": "260ms" } as CSSProperties}
        >
          <HeroVisual />
        </div>

        {/* Text */}
        <div
          className="
            order-2 md:order-none mt-10 md:mt-0
            md:col-start-1 md:col-span-7 md:row-start-1
            relative z-10
          "
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-[color:var(--color-muted)] mb-6 hero-rise"
            style={{ "--hero-delay": "0ms" } as CSSProperties}
          >
            Portfolio
          </p>
          <h1
            className="display text-4xl md:text-5xl leading-[1.1] hero-rise max-w-[34rem]"
            style={{ "--hero-delay": "120ms" } as CSSProperties}
          >
            {headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
