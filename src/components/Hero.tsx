import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Bookmark,
  FileText,
  Send,
  User,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "../data/site";
import AvailabilityPill from "./AvailabilityPill";
import LetterRise from "./LetterRise";
import CurrentlyLine from "./CurrentlyLine";
import MagneticCTA from "./MagneticCTA";
import { useParallax } from "../hooks/useParallax";

const ICONS: Record<string, LucideIcon> = {
  User,
  FileText,
  Bookmark,
  Send,
};

export default function Hero() {
  const portrait = useParallax<HTMLDivElement>(14);

  return (
    <section
      id="top"
      className="relative px-6 pt-32 pb-20 sm:pt-36 md:pt-40 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="hero-rise" style={{ ["--hero-delay" as never]: "0ms" } as CSSProperties}>
          <AvailabilityPill text={SITE.availability} />
        </div>

        <h1 className="display mt-8 leading-[0.95] tracking-[-0.02em] text-[clamp(3.25rem,12vw,9rem)]">
          <span className="block">
            <LetterRise text={SITE.firstName} baseDelay={120} />
          </span>
          <span className="block">
            <LetterRise text={SITE.lastName} baseDelay={120 + SITE.firstName.length * 55} />
          </span>
        </h1>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div
            className="md:col-span-7 hero-rise"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            <p className="display text-[17px] sm:text-[19px] leading-[1.55] text-[color:var(--color-ink)] max-w-[52ch]">
              {SITE.hero.bio}
            </p>

            <div className="mt-10 flex items-start gap-6">
              <div
                ref={portrait.ref}
                className="shrink-0 h-20 w-20 rounded-full overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
                style={{ transform: `translateY(${portrait.offset}px)` }}
              >
                <img
                  src="/headshot.jpg"
                  alt="Nixon Tse portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="flex-1 pt-1">
                <div className="space-y-1">
                  {SITE.hero.roles.map((role) => (
                    <div
                      key={role}
                      className="mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]"
                    >
                      {role}
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <CurrentlyLine items={SITE.hero.currently} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-5 hero-rise"
            style={{ ["--hero-delay" as never]: "800ms" } as CSSProperties}
          >
            <div className="mono text-[10.5px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Where you can start
            </div>
            <ul className="mt-5 divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
              {SITE.startHere.map((item, i) => {
                const Icon = ICONS[item.icon] ?? ArrowUpRight;
                return (
                  <li key={i}>
                    <MagneticCTA
                      href={item.target}
                      className="group block w-full"
                      innerClassName="w-full"
                      ariaLabel={item.label}
                    >
                      <span className="flex w-full items-center gap-4 py-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors group-hover:bg-[color:var(--color-ink)] group-hover:text-[color:var(--color-bg)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="flex-1 display text-[17px] text-[color:var(--color-ink)]">
                          {item.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--color-muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--color-ink)]" />
                      </span>
                    </MagneticCTA>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
