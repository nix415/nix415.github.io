import { useState, type CSSProperties } from "react";
import { SITE } from "../data/site";

export default function Hero() {
  const { headline, imageUrl } = SITE.hero;
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-6 pt-16 pb-24 scroll-mt-24"
    >
      <div className="md:grid md:grid-cols-12 md:items-center">
        {/* Image — sits on the right, slightly under the headline on desktop */}
        <div
          className="
            order-1 md:order-none
            md:col-start-7 md:col-span-6 md:row-start-1
            relative hero-rise
          "
          style={{ "--hero-delay": "260ms" } as CSSProperties}
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-line)]">
            {imageUrl ? (
              <>
                <img
                  src={imageUrl}
                  alt={SITE.name}
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full object-cover image-fade ${loaded ? "is-loaded" : ""}`}
                />
                {/* Soft left fade so the headline reads cleanly over the image */}
                <div
                  className="
                    pointer-events-none absolute inset-y-0 left-0 w-2/3
                    bg-gradient-to-r from-[color:var(--color-bg)] via-[color:var(--color-bg)]/40 to-transparent
                  "
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[color:var(--color-muted)] text-sm">
                Add a photo in <code>src/data/site.ts</code>
              </div>
            )}
          </div>
        </div>

        {/* Text — overlaps the left edge of the image on desktop */}
        <div
          className="
            order-2 md:order-none mt-10 md:mt-0
            md:col-start-1 md:col-span-8 md:row-start-1
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
