import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Activity,
  Gauge,
  LineChart,
  MousePointerClick,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import Section from "../components/Section";
import LetterRise from "../components/LetterRise";
import { useInView } from "../hooks/useInView";

type Stat = {
  value: string;
  label: string;
  note?: string;
};

const DELIVERY_STATS: Stat[] = [
  {
    value: "8",
    label: "Marketing pages shipped",
    note: "Home, Studio, About, Services, Portfolio, Shop, Consultation, Privacy",
  },
  {
    value: "3",
    label: "GA4 conversion events live",
    note: "generate_lead · join_waitlist · click_book_consultation",
  },
  {
    value: "59",
    label: "Broken lightbox URLs fixed",
    note: "Corrupted Photon query strings were returning 404s on every project open",
  },
  {
    value: "1",
    label: "Measurement stream cleaned up",
    note: "Deduped three Trinity GA4 properties down to the live G-VNZGGBFKX2 stream",
  },
];

const TRACKING_PLAN = [
  {
    event: "generate_lead",
    trigger: "Consultation wizard success",
    why: "Primary business conversion — a booked interest signal",
  },
  {
    event: "join_waitlist",
    trigger: "Shop waitlist thank-you state",
    why: "Secondary conversion for The Trinity Edit product launch",
  },
  {
    event: "click_book_consultation",
    trigger: "Primary CTA / nav Book clicks",
    why: "Upper-funnel intent before form completion",
  },
  {
    event: "page_view",
    trigger: "Every route (gtag config)",
    why: "Baseline traffic + landing-page diagnosis",
  },
] as const;

const PHASES = [
  {
    index: "01",
    title: "Build the marketing surface",
    body: "Designed and coded the full multipage site from scratch — brand system, navigation, portfolio lightbox, consultation wizard, and shop waitlist — then moved it onto WordPress.com with Custom HTML blocks so the studio could edit without a rebuild.",
    img: "/images/trinity-phase-before.png",
    caption: "Phase 1 — early generic layout (illustrative rebuild baseline)",
  },
  {
    index: "02",
    title: "Ship a conversion-ready experience",
    body: "Polished the live site into a dark editorial brand system, fixed WooCommerce claiming /shop/, bridged Jetpack forms into custom UI, and performance-tuned images through WordPress Photon (width + quality parameters, srcset, LCP-safe heroes).",
    img: "/images/trinity-phase-after.png",
    caption: "Phase 2 — live marketing site (illustrative polished state)",
  },
  {
    index: "03",
    title: "Instrument what growth cares about",
    body: "Installed GA4 via WPCode Header, wired success handlers to fire key events without sending PII, published a Privacy Policy disclosure, verified events in Realtime, and marked lead + waitlist as key events.",
    img: "/images/trinity-phase-tracking.png",
    caption: "Phase 3 — measurement layer (illustrative analytics surface)",
  },
] as const;

const STACK = [
  "Custom HTML + CSS design system",
  "WordPress.com + WPCode",
  "Jetpack Forms (bridged)",
  "GA4 / gtag.js",
  "Photon image CDN",
  "WooCommerce architecture (deferred catalog)",
] as const;

export default function CaseStudyTrinity() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [heroRef, heroInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <main>
      <div className="px-6 pt-24 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/#work"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="link-ink">Back to work</span>
          </Link>
        </div>
      </div>

      <section
        ref={heroRef}
        className={`reveal ${heroInView ? "is-visible" : ""} px-6 pt-10 pb-16 sm:pt-14 md:pb-20`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="dash" aria-hidden="true" />
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Case Study · Trinity Interior Design Studio · 2026
            </span>
          </div>

          <h1 className="display leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5.25rem)]">
            <span className="block">
              <LetterRise text="A marketing site built" baseDelay={120} />
            </span>
            <span className="block">
              <LetterRise text="to measure growth." baseDelay={260} />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[60ch]"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            End-to-end build for a California interior design studio — brand,
            pages, conversion UX, performance, and GA4 instrumentation — so the
            business can see consultation leads and shop waitlist signups in
            Realtime, not guess.
          </p>

          <dl
            className="hero-rise mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[color:var(--color-line)] pt-6"
            style={{ ["--hero-delay" as never]: "780ms" } as CSSProperties}
          >
            {[
              { label: "Brief", value: "Ship a measurable marketing site" },
              { label: "Format", value: "Freelance · live client site" },
              {
                label: "Role",
                value: "Build · UX · Analytics · Performance",
              },
              { label: "Year", value: "2026" },
            ].map((row) => (
              <div key={row.label}>
                <dt className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                  {row.label}
                </dt>
                <dd className="mt-2 display text-[14px] leading-[1.4] text-[color:var(--color-ink)]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-5"
            style={{ ["--hero-delay" as never]: "900ms" } as CSSProperties}
          >
            <a
              href="https://trinityinteriordesignstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="press group inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Visit live site</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
          <img
            src="/images/trinity-cover.png"
            alt="Trinity Interior Design marketing site — editorial cover"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </div>

      <Section
        id="client"
        eyebrow="The Client"
        title="Trinity Interior Design Studio"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              A California interior design studio needed a site that felt as
              editorial as the work — and that could actually tell them when
              someone wanted a consultation or joined the coming product
              waitlist.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              I built the site from scratch, launched it on WordPress.com, then
              treated analytics and performance as part of the product — not a
              bolt-on after launch.
            </p>
          </div>
          <div className="md:col-span-5">
            <div
              className="stagger-item rounded-md border border-[color:var(--color-line)] p-6 space-y-4"
              style={{ ["--stagger-delay" as never]: "180ms" } as CSSProperties}
            >
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                Stack
              </div>
              <ul className="space-y-2">
                {STACK.map((item) => (
                  <li
                    key={item}
                    className="display text-[14px] leading-[1.5] text-[color:var(--color-ink)] flex gap-2"
                  >
                    <span className="text-[color:var(--color-muted)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="problem"
        eyebrow="The Problem"
        title="Pretty pages without a measurement model don’t help growth."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "No conversion truth",
              body: "Consultation and waitlist flows existed as UX, but weren’t defined as GA4 key events the studio could manage to.",
            },
            {
              icon: Gauge,
              title: "Performance debt",
              body: "Full-size images and LCP-blocking hero opacity patterns risked slow first paint — a quiet tax on every landing session.",
            },
            {
              icon: Workflow,
              title: "Platform friction",
              body: "WooCommerce had claimed /shop/, Jetpack forms didn’t match the brand UI, and duplicate GA4 properties muddied which stream was real.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="stagger-item rounded-md border border-[color:var(--color-line)] p-6"
              style={
                {
                  ["--stagger-delay" as never]: `${120 + i * 100}ms`,
                } as CSSProperties
              }
            >
              <card.icon
                className="h-5 w-5 text-[color:var(--color-muted)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 display text-[18px] leading-[1.2] text-[color:var(--color-ink)]">
                {card.title}
              </h3>
              <p className="mt-3 display text-[14px] leading-[1.55] text-[color:var(--color-muted)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="metrics" eyebrow="Delivery Metrics" title="What shipped — in numbers">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DELIVERY_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-item border-t border-[color:var(--color-line)] pt-5"
              style={
                {
                  ["--stagger-delay" as never]: `${100 + i * 80}ms`,
                } as CSSProperties
              }
            >
              <div className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[-0.02em] text-[color:var(--color-ink)]">
                {stat.value}
              </div>
              <div className="mt-3 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink)]">
                {stat.label}
              </div>
              {stat.note ? (
                <p className="mt-2 display text-[13px] leading-[1.5] text-[color:var(--color-muted)]">
                  {stat.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <p
          className="stagger-item mt-10 display text-[13px] leading-[1.55] text-[color:var(--color-muted)] max-w-[62ch]"
          style={{ ["--stagger-delay" as never]: "480ms" } as CSSProperties}
        >
          Metrics below are implementation outcomes verified on the live site
          and in GA4 Realtime (including a confirmed{" "}
          <span className="text-[color:var(--color-ink)]">join_waitlist</span>{" "}
          event). Traffic-scale KPIs will compound as the studio runs the site;
          the instrumentation is already in place to read them.
        </p>
      </Section>

      <Section
        id="phases"
        eyebrow="Build Phases"
        title="Three phases — surface, polish, measurement."
      >
        <div className="space-y-16 md:space-y-24">
          {PHASES.map((phase, i) => (
            <div
              key={phase.index}
              className="stagger-item grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
              style={
                {
                  ["--stagger-delay" as never]: `${100 + i * 120}ms`,
                } as CSSProperties
              }
            >
              <div
                className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
                  <img
                    src={phase.img}
                    alt={phase.caption}
                    className="w-full aspect-[16/9] object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  {phase.caption}
                </p>
              </div>
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                  Phase {phase.index}
                </div>
                <h3 className="mt-3 display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.15] text-[color:var(--color-ink)]">
                  {phase.title}
                </h3>
                <p className="mt-4 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)]">
                  {phase.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="tracking"
        eyebrow="Tracking Plan"
        title="Events mapped to business outcomes"
      >
        <div className="overflow-x-auto rounded-md border border-[color:var(--color-line)]">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
                <th className="mono px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)] font-normal">
                  Event
                </th>
                <th className="mono px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)] font-normal">
                  Fires when
                </th>
                <th className="mono px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)] font-normal">
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              {TRACKING_PLAN.map((row) => (
                <tr
                  key={row.event}
                  className="border-b border-[color:var(--color-line)] last:border-0"
                >
                  <td className="px-5 py-4 mono text-[12px] text-[color:var(--color-ink)]">
                    {row.event}
                  </td>
                  <td className="px-5 py-4 display text-[14px] text-[color:var(--color-ink)]">
                    {row.trigger}
                  </td>
                  <td className="px-5 py-4 display text-[14px] text-[color:var(--color-muted)]">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: MousePointerClick,
              title: "No PII in events",
              body: "Emails stay in Jetpack; GA only gets that a conversion happened.",
            },
            {
              icon: ShieldCheck,
              title: "Privacy disclosed",
              body: "Published /privacy-policy covering Analytics + CCPA basics.",
            },
            {
              icon: Activity,
              title: "Realtime verified",
              body: "Confirmed page_view, CTA clicks, and join_waitlist on the live property.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="stagger-item"
              style={
                {
                  ["--stagger-delay" as never]: `${120 + i * 90}ms`,
                } as CSSProperties
              }
            >
              <item.icon
                className="h-4 w-4 text-[color:var(--color-muted)]"
                aria-hidden="true"
              />
              <div className="mt-3 display text-[15px] text-[color:var(--color-ink)]">
                {item.title}
              </div>
              <p className="mt-2 display text-[13.5px] leading-[1.55] text-[color:var(--color-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="next"
        eyebrow="What I’d Measure Next"
        title="The instrumentation unlocks the questions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: LineChart,
              title: "Funnel exploration",
              body: "Home / Portfolio → click_book_consultation → generate_lead. Find where intent drops.",
            },
            {
              icon: Target,
              title: "Channel quality",
              body: "UTM Instagram / Pinterest / LTK links into Acquisition, then compare lead rate by source.",
            },
            {
              icon: Gauge,
              title: "Landing-page speed vs. conversion",
              body: "Watch consultation conversion against LCP regressions when new imagery ships.",
            },
            {
              icon: Activity,
              title: "Waitlist → launch cohort",
              body: "When The Trinity Edit goes live, treat join_waitlist as the pre-launch demand base.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="stagger-item flex gap-4 rounded-md border border-[color:var(--color-line)] p-6"
              style={
                {
                  ["--stagger-delay" as never]: `${100 + i * 80}ms`,
                } as CSSProperties
              }
            >
              <item.icon
                className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-muted)]"
                aria-hidden="true"
              />
              <div>
                <div className="display text-[16px] text-[color:var(--color-ink)]">
                  {item.title}
                </div>
                <p className="mt-2 display text-[14px] leading-[1.55] text-[color:var(--color-muted)]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-6 py-20 md:py-28 border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Live
            </div>
            <h2 className="mt-3 display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-[color:var(--color-ink)] max-w-[20ch]">
              See the marketing system in production.
            </h2>
          </div>
          <a
            href="https://trinityinteriordesignstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="press group inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">trinityinteriordesignstudio.com</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
