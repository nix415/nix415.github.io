import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  ChartLine,
  CircleCheckBig,
  Database,
  FlaskConical,
  Gauge,
  Hourglass,
  MousePointerClick,
  Route,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import Section from "../components/Section";
import LetterRise from "../components/LetterRise";
import { useInView } from "../hooks/useInView";

/* ── Funnel diagram ─────────────────────────────────────────────
   The tracking plan rendered as two chains of nodes. `signal` and
   `key` nodes are GA4 events; `page` and `flow` are the surfaces
   between them. ------------------------------------------------ */

type NodeKind = "page" | "flow" | "signal" | "key";

type FunnelNode = {
  kind: NodeKind;
  label: string;
  note: string;
};

const KIND_LABEL: Record<NodeKind, string> = {
  page: "Page",
  flow: "Flow",
  signal: "Intent signal",
  key: "Key event",
};

const CONSULTATION_FUNNEL: FunnelNode[] = [
  {
    kind: "page",
    label: "Home · Portfolio · Services",
    note: "Entry. page_view establishes which pages do the persuading.",
  },
  {
    kind: "signal",
    label: "click_book_consultation",
    note: "Fires on primary and nav CTA clicks — demand recorded before the form can fail.",
  },
  {
    kind: "page",
    label: "Consultation page",
    note: "The single destination every one of the five services routes to.",
  },
  {
    kind: "flow",
    label: "Booking wizard — 4 steps",
    note: "Project Type → Budget & Timeline → Project Details → Your Details.",
  },
  {
    kind: "key",
    label: "generate_lead",
    note: "Fires on submission success, not button click. One event equals one lead the studio can follow up with.",
  },
];

const WAITLIST_FUNNEL: FunnelNode[] = [
  {
    kind: "page",
    label: "Shop — The Trinity Edit",
    note: "A pre-launch page for a product line that does not exist yet.",
  },
  {
    kind: "flow",
    label: "Waitlist capture",
    note: "Single-field email form with an inline confirmation state.",
  },
  {
    kind: "key",
    label: "join_waitlist",
    note: "The only demand signal available before there is anything to sell.",
  },
];

const TRACKING_PLAN = [
  {
    event: "generate_lead",
    trigger: "Consultation wizard submission succeeds",
    why: "The primary business outcome — a prospective client asking to be contacted.",
  },
  {
    event: "join_waitlist",
    trigger: "Shop waitlist confirmation state renders",
    why: "Pre-launch demand for The Trinity Edit, before inventory commitments are made.",
  },
  {
    event: "click_book_consultation",
    trigger: "Primary or nav “Book a Consultation” CTA click",
    why: "Separates how many people want to book from how many succeed at booking.",
  },
  {
    event: "page_view",
    trigger: "Every route, via gtag config",
    why: "Traffic baseline, landing-page mix, and the denominator for every rate above.",
  },
] as const;

const DATA_QUALITY = [
  {
    icon: Database,
    title: "One authoritative stream",
    body: "Three duplicate GA4 properties had accumulated on the account. I consolidated to a single stream so two reports can never disagree about the same week.",
  },
  {
    icon: MousePointerClick,
    title: "Success states, not clicks",
    body: "Conversion events are wired to confirmation states. A submit-button listener would have counted failed attempts as leads and quietly inflated every rate.",
  },
  {
    icon: ShieldCheck,
    title: "No PII, disclosed openly",
    body: "Emails stay with the form handler; GA4 only learns that a conversion happened. A published privacy policy covers analytics use and CCPA basics.",
  },
  {
    icon: Activity,
    title: "Verified, not assumed",
    body: "Every event was confirmed firing in GA4 Realtime on the live property before the work was called done, including a live join_waitlist submission.",
  },
] as const;

const SHIPPED = [
  "8 pages designed and coded from scratch",
  "Editorial design system — dark palette, serif and sans pairing",
  "Responsive navigation with a full-screen mobile menu",
  "Portfolio lightbox with keyboard navigation",
  "4-step consultation booking wizard",
  "Pre-launch waitlist capture for The Trinity Edit",
] as const;

const IMPLEMENTATION_OUTCOMES = [
  {
    value: "4",
    label: "Events instrumented",
    note: "Two marked as GA4 key events so they report as conversions",
  },
  {
    value: "2",
    label: "Funnels mapped end to end",
    note: "Consultation leads and pre-launch waitlist demand",
  },
  {
    value: "3 → 1",
    label: "GA4 properties consolidated",
    note: "Duplicate streams removed before any reporting was built on them",
  },
  {
    value: "59",
    label: "Broken image URLs repaired",
    note: "Corrupted CDN query strings were 404ing every portfolio open",
  },
] as const;

const CONSTRAINT_WINS = [
  {
    icon: Workflow,
    title: "WooCommerce had taken /shop/",
    body: "The plugin claimed the shop route and overrode the custom pre-launch page. I reassigned its catalog page to a separate route, which freed /shop/ without disabling commerce for the eventual launch.",
  },
  {
    icon: Gauge,
    title: "Images and first paint",
    body: "Full-size uploads were being served to every device. I moved them through the platform image CDN with width and quality parameters plus srcset, and removed hero fade-in patterns that were delaying Largest Contentful Paint.",
  },
  {
    icon: Target,
    title: "Branded forms, native delivery",
    body: "The platform's form handler was the only reliable delivery path but its markup broke the brand. I built custom UI and bridged it into the native handler rather than replacing it — brand intact, submissions still guaranteed.",
  },
] as const;

const MEASURABLE_NOW = [
  "Event correctness — conversions confirmed firing in Realtime",
  "Traffic baseline — source and medium, device, geography",
  "Landing-page mix — where sessions enter before any CTA click",
  "Wizard drop-off — which of the four steps loses people",
] as const;

const MEASURABLE_LATER = [
  "End-to-end consultation conversion rate",
  "Which channels produce leads rather than just sessions",
  "Waitlist conversion rate and time from first visit to signup",
  "Landing-page and CTA-placement tests with enough traffic to call",
] as const;

const HYPOTHESES = [
  {
    claim: "Bespoke Consultation will out-convert Full Design.",
    reasoning:
      "It is the lowest-commitment paid entry point — a few hours rather than a months-long engagement — so it should absorb visitors who are interested but not yet ready to hand over a whole home.",
    test: "Segment generate_lead by which service row the session engaged with before converting, then compare rates.",
  },
  {
    claim: "Wizard drop-off will concentrate at Budget & Timeline.",
    reasoning:
      "Step two is the first question that asks for commitment rather than preference. If that is the leak, the fix is ranges and reassurance copy — not more traffic.",
    test: "Step-level drop-off across the four wizard steps; compare step-two exit rate against steps one, three, and four.",
  },
  {
    claim: "Waitlist will convert at a multiple of the consultation rate, from lower-intent traffic.",
    reasoning:
      "An email costs a visitor nothing; a design engagement costs thousands. Social referrals should show a wide gap between the two rates.",
    test: "Compare join_waitlist and generate_lead rates by source, with attention to Instagram and Pinterest referrals.",
  },
  {
    claim: "Portfolio is the persuasion page, not the home page.",
    reasoning:
      "Interior design is bought on evidence of taste. If portfolio sessions carry the intent, it deserves the paid spend and the strongest CTA placement.",
    test: "Path analysis from landing page to click_book_consultation, comparing home entries against portfolio entries.",
  },
] as const;

const NEXT_STEPS = [
  {
    icon: ChartLine,
    title: "Build the funnel exploration",
    body: "A GA4 exploration from landing page through click_book_consultation to generate_lead, so drop-off is a chart the studio owner can read rather than a query someone has to write.",
  },
  {
    icon: Route,
    title: "Impose UTM discipline",
    body: "A single tagging convention across Instagram, Pinterest, and any paid links, so acquisition reporting attributes leads to campaigns instead of dumping them into direct traffic.",
  },
  {
    icon: Gauge,
    title: "Watch speed against conversion",
    body: "Interior design sites gain heavy imagery over time. Tracking Largest Contentful Paint alongside consultation conversion catches the moment new photography starts costing leads.",
  },
  {
    icon: FlaskConical,
    title: "Instrument the launch",
    body: "When The Trinity Edit ships, extend the model to view_item, add_to_cart, and purchase, and size the launch cohort against accumulated join_waitlist volume.",
  },
] as const;

export default function CaseStudyTrinity() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [heroRef, heroInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <main>
      {/* ── Top utility row ───────────────────────────────────── */}
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

      {/* ── Hero ──────────────────────────────────────────────── */}
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
              <LetterRise text="A marketing site that can" baseDelay={120} />
            </span>
            <span className="block">
              <LetterRise text="prove whether it works." baseDelay={260} />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[62ch]"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            Trinity had a polished site and no way to know whether it produced
            business. Rather than launch blind, I designed the measurement model
            alongside the product, so every conversion path was trackable from
            day one. The build is here — but the analytics infrastructure is the
            point.
          </p>

          {/* Meta strip */}
          <dl
            className="hero-rise mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[color:var(--color-line)] pt-6"
            style={{ ["--hero-delay" as never]: "780ms" } as CSSProperties}
          >
            {[
              { label: "Brief", value: "Connect site activity to business outcomes" },
              { label: "Format", value: "Freelance · live client site" },
              { label: "Role", value: "Measurement design · Build · Conversion UX" },
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
            className="hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
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
            <a
              href="#measurement"
              className="press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Skip to the measurement model</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Cover ─────────────────────────────────────────────── */}
      <div className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
          <img
            src="/images/trinity-cover.png"
            alt="Trinity Interior Design Studio marketing site"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </div>

      {/* ── 1. Problem & Approach ─────────────────────────────── */}
      <Section
        id="problem"
        eyebrow="Problem & Approach"
        title="A funnel with no instrumentation is a guess."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              Trinity sells five services, and every one of them routes to the
              same booking form. That concentration is a gift for measurement:
              there is exactly one page where the business either happens or
              doesn't. But nothing recorded how anyone arrived there, which
              pages or CTAs did the persuading, or how many people started the
              booking flow and abandoned it.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              The studio was also pre-launching a product line, The Trinity
              Edit, behind an email waitlist. Before the products exist, that
              waitlist is the only demand signal available — and it was equally
              invisible.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "360ms" } as CSSProperties}
            >
              So I treated measurement as a design input rather than a
              post-launch addition. Before building the conversion UX, I defined
              what counted as a conversion, which upstream signals would explain
              it, and what would have to be true for the studio to open a report
              and make a decision. The site was then built to emit exactly those
              signals.
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-5 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "320ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Five services, one outcome
            </div>
            <ul className="mt-5 space-y-2.5">
              {[
                "Full Design",
                "Bespoke Consultation",
                "Renovation Direction",
                "Home Staging",
                "Airbnb & short-term rental design",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 display text-[14px] leading-[1.5] text-[color:var(--color-ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="mono mt-[3px] text-[10px] text-[color:var(--color-muted)]"
                  >
                    →
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 display text-[13px] leading-[1.55] text-[color:var(--color-muted)]">
              All five converge on a single consultation booking. One form to
              instrument, one number the business actually cares about.
            </p>
          </aside>
        </div>
      </Section>

      {/* ── 2. What Was Built ─────────────────────────────────── */}
      <Section
        id="product"
        eyebrow="What Was Built"
        title="The product, briefly."
        lede="Eight pages, a design system, and two conversion flows — published so the studio can edit copy without a developer. This is the surface the measurement model observes."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
              <img
                src="/images/trinity-phase-after.png"
                alt="Trinity Interior Design Studio — live marketing site design"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Live marketing site — dark editorial system
            </p>
          </div>

          <ul className="md:col-span-5 space-y-3">
            {SHIPPED.map((item, i) => (
              <li
                key={item}
                className="stagger-item flex items-start gap-3 display text-[14.5px] leading-[1.5] text-[color:var(--color-ink)]"
                style={
                  {
                    ["--stagger-delay" as never]: `${140 + i * 80}ms`,
                  } as CSSProperties
                }
              >
                <CircleCheckBig
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 text-[color:var(--color-muted)]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {IMPLEMENTATION_OUTCOMES.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-item border-t border-[color:var(--color-line)] pt-5"
              style={
                {
                  ["--stagger-delay" as never]: `${120 + i * 80}ms`,
                } as CSSProperties
              }
            >
              <div className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-none tracking-[-0.02em] text-[color:var(--color-ink)]">
                {stat.value}
              </div>
              <div className="mt-3 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink)]">
                {stat.label}
              </div>
              <p className="mt-2 display text-[13px] leading-[1.5] text-[color:var(--color-muted)]">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. Constraints ───────────────────────────────────── */}
      <Section
        id="constraints"
        eyebrow="Constraints Solved"
        title="Shipped inside a locked-down platform."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <p
            className="stagger-item md:col-span-7 display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
            style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
          >
            The site lives on WordPress.com, which means no theme files, no
            server-side code, and no direct access to the page template. The
            analytics tag couldn't simply be added to a header file — it had to
            be injected through a code-snippet plugin, and every custom event
            had to hook into markup owned by the platform rather than by me.
          </p>
          <p
            className="stagger-item md:col-span-5 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)]"
            style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
          >
            Constrained systems are where most real marketing sites actually
            live. Three problems in particular had to be solved before the
            measurement model could be trusted.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONSTRAINT_WINS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="stagger-item rounded-md border border-[color:var(--color-line)] p-6"
                style={
                  {
                    ["--stagger-delay" as never]: `${120 + i * 100}ms`,
                  } as CSSProperties
                }
              >
                <Icon
                  className="h-5 w-5 text-[color:var(--color-muted)]"
                  aria-hidden="true"
                />
                <h3 className="mt-4 display text-[17px] leading-[1.25] text-[color:var(--color-ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 display text-[14px] leading-[1.55] text-[color:var(--color-muted)]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 4. The Measurement Model (centerpiece) ───────────── */}
      <Section
        id="measurement"
        eyebrow="The Measurement Model"
        title="Two funnels, four events, one rule."
        lede="Every event has to answer a question someone would actually ask in a meeting. If it doesn't, it's noise in the report and it doesn't ship."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <Funnel
            title="Consultation lead"
            subtitle="The revenue funnel"
            nodes={CONSULTATION_FUNNEL}
          />
          <Funnel
            title="Pre-launch waitlist"
            subtitle="The demand funnel"
            nodes={WAITLIST_FUNNEL}
          />
        </div>

        {/* Narrative: why the model looks like this */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <h3 className="display text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.15] text-[color:var(--color-ink)]">
              Why the intent signal exists
            </h3>
            <p className="display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]">
              A model that only records completed leads can tell you the number
              went down but never why. If <Code>generate_lead</Code> drops, the
              cause is either fewer people wanting to book or the booking flow
              failing them — and those demand opposite responses. One is a
              traffic problem, the other is a product problem.
            </p>
            <p className="display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]">
              <Code>click_book_consultation</Code> exists to keep those two
              causes apart. It captures intent at the moment it's expressed,
              upstream of anything that could break. Held against completed
              leads, it turns an ambiguous decline into a diagnosis: steady
              clicks with falling leads points at the form, while falling clicks
              points at acquisition or the pages doing the persuading.
            </p>
            <p className="display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]">
              The two conversions are also named after business outcomes rather
              than interface actions, and both are marked as GA4 key events. A
              report that says <Code>generate_lead</Code> reads like the
              business; one that says <Code>form_submit_3</Code> needs a
              translator, and translators are how measurement models quietly die
              after the person who built them leaves.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
              <img
                src="/images/trinity-phase-tracking.png"
                alt="Measurement layer for the Trinity marketing site"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-3 mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              Measurement layer — illustrative
            </p>
          </div>
        </div>

        {/* Event table */}
        <div className="mt-20">
          <h3 className="display text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.15] text-[color:var(--color-ink)]">
            The tracking plan
          </h3>
          <div className="mt-8 overflow-x-auto rounded-md border border-[color:var(--color-line)]">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr className="border-b border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
                  {["Event", "Fires when", "Why it earns a place in the model"].map(
                    (h) => (
                      <th
                        key={h}
                        className="mono px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)] font-normal"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {TRACKING_PLAN.map((row) => (
                  <tr
                    key={row.event}
                    className="border-b border-[color:var(--color-line)] last:border-0"
                  >
                    <td className="px-5 py-4 mono text-[12px] text-[color:var(--color-ink)] whitespace-nowrap">
                      {row.event}
                    </td>
                    <td className="px-5 py-4 display text-[14px] leading-[1.5] text-[color:var(--color-ink)]">
                      {row.trigger}
                    </td>
                    <td className="px-5 py-4 display text-[14px] leading-[1.5] text-[color:var(--color-muted)]">
                      {row.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation + data quality */}
        <div className="mt-20">
          <h3 className="display text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.15] text-[color:var(--color-ink)]">
            Implementation and data quality
          </h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {DATA_QUALITY.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="stagger-item flex items-start gap-4"
                  style={
                    {
                      ["--stagger-delay" as never]: `${120 + i * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="display text-[16px] leading-[1.3] text-[color:var(--color-ink)]">
                      {item.title}
                    </h4>
                    <p className="mt-2 display text-[14px] leading-[1.6] text-[color:var(--color-muted)] max-w-[46ch]">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 5. Now vs. later ─────────────────────────────────── */}
      <Section
        id="horizon"
        eyebrow="Measurement Horizon"
        title="What's readable now, and what needs traffic."
        lede="The instrumentation shipped before meaningful traffic accumulated. I'd rather state that plainly than dress up a sample too small to trust, so here is the split."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <div className="rounded-md border border-[color:var(--color-line)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CircleCheckBig
                className="h-4 w-4 text-[color:var(--color-ink)]"
                aria-hidden="true"
              />
              <span className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-ink)]">
                Readable today
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {MEASURABLE_NOW.map((item) => (
                <li
                  key={item}
                  className="display text-[14.5px] leading-[1.55] text-[color:var(--color-ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-dashed border-[color:var(--color-line)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Hourglass
                className="h-4 w-4 text-[color:var(--color-muted)]"
                aria-hidden="true"
              />
              <span className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                Needs 60–90 days of traffic
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {MEASURABLE_LATER.map((item) => (
                <li
                  key={item}
                  className="display text-[14.5px] leading-[1.55] text-[color:var(--color-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 display text-[15px] sm:text-[16px] leading-[1.65] text-[color:var(--color-ink)] max-w-[68ch]">
          Most small-business sites launch with no instrumentation at all and
          spend their first year reconstructing what happened from memory. This
          one launched with a clean baseline, two defined key events, and a
          written account of which decisions the data is supposed to inform.
          Performance numbers follow traffic. The ability to read them doesn't
          have to wait.
        </p>
      </Section>

      {/* ── 6. Hypotheses ────────────────────────────────────── */}
      <Section
        id="hypotheses"
        eyebrow="Measurement Hypotheses"
        title="What I expect the data to say."
        lede="Predictions worth writing down before the data arrives, so they can be wrong on the record. Each one names the report that would settle it."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HYPOTHESES.map((h, i) => (
            <div
              key={h.claim}
              className="stagger-item rounded-md border border-[color:var(--color-line)] p-6 sm:p-7"
              style={
                {
                  ["--stagger-delay" as never]: `${120 + i * 90}ms`,
                } as CSSProperties
              }
            >
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                Hypothesis {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 display text-[17px] leading-[1.3] text-[color:var(--color-ink)]">
                {h.claim}
              </h3>
              <p className="mt-3 display text-[14px] leading-[1.6] text-[color:var(--color-muted)]">
                {h.reasoning}
              </p>
              <div className="mt-5 border-t border-[color:var(--color-line)] pt-4">
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  How I'd test it
                </div>
                <p className="mt-2 display text-[13.5px] leading-[1.55] text-[color:var(--color-ink)]">
                  {h.test}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. Next steps ────────────────────────────────────── */}
      <Section
        id="next"
        eyebrow="Next Steps"
        title="What I'd do with 90 days of data."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEXT_STEPS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="stagger-item flex gap-4 rounded-md border border-[color:var(--color-line)] p-6"
                style={
                  {
                    ["--stagger-delay" as never]: `${100 + i * 80}ms`,
                  } as CSSProperties
                }
              >
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-muted)]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="display text-[16px] leading-[1.3] text-[color:var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 display text-[14px] leading-[1.6] text-[color:var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Live CTA ─────────────────────────────────────────── */}
      <section className="px-6 py-20 md:py-28 border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Live
            </div>
            <h2 className="mt-3 display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-[color:var(--color-ink)] max-w-[22ch]">
              See the instrumented site in production.
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

      {/* ── Footer nav ───────────────────────────────────────── */}
      <div className="border-t border-[color:var(--color-line)] px-6 py-12">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-6">
          <Link
            to="/#work"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="link-ink">Back to work</span>
          </Link>
          <Link
            to="/#contact"
            className="press inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}

/** Inline monospace token for event names inside body copy. */
function Code({ children }: { children: string }) {
  return (
    <span className="mono text-[12.5px] text-[color:var(--color-ink)]">
      {children}
    </span>
  );
}

function Funnel({
  title,
  subtitle,
  nodes,
}: {
  title: string;
  subtitle: string;
  nodes: FunnelNode[];
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-[color:var(--color-line)] pb-4">
        <h3 className="display text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.2] text-[color:var(--color-ink)]">
          {title}
        </h3>
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
          {subtitle}
        </span>
      </div>

      <ol className="mt-8">
        {nodes.map((node, i) => (
          <li key={node.label}>
            {i > 0 ? (
              <div
                aria-hidden="true"
                className="ml-6 h-8 w-px bg-[color:var(--color-line)]"
              />
            ) : null}
            <FunnelCard node={node} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function FunnelCard({ node }: { node: FunnelNode }) {
  const isKey = node.kind === "key";
  const isEvent = isKey || node.kind === "signal";

  const shell = isKey
    ? "border-[color:var(--color-ink)] bg-[color:var(--color-ink)]"
    : node.kind === "signal"
      ? "border-dashed border-[color:var(--color-ink)]"
      : "border-[color:var(--color-line)] bg-[color:var(--color-surface)]";

  const tagTone = isKey
    ? "text-[color:var(--color-bg)]"
    : "text-[color:var(--color-muted)]";
  const labelTone = isKey
    ? "text-[color:var(--color-bg)]"
    : "text-[color:var(--color-ink)]";
  const noteTone = isKey
    ? "text-[color:var(--color-bg)] opacity-80"
    : "text-[color:var(--color-muted)]";

  return (
    <div className={`rounded-md border px-5 py-4 ${shell}`}>
      <div className={`mono text-[9.5px] uppercase tracking-[0.24em] ${tagTone}`}>
        {KIND_LABEL[node.kind]}
      </div>
      <div
        className={`mt-2 ${isEvent ? "mono text-[13px]" : "display text-[15px]"} leading-[1.3] ${labelTone}`}
      >
        {node.label}
      </div>
      <p className={`mt-2 display text-[13px] leading-[1.55] ${noteTone}`}>
        {node.note}
      </p>
    </div>
  );
}
