import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Layers,
  LineChart,
  MapPin,
  Megaphone,
  PenLine,
  Search,
  Sparkles,
  Star,
  Store,
  Target,
} from "lucide-react";
import Section from "../components/Section";
import LetterRise from "../components/LetterRise";
import { useInView } from "../hooks/useInView";

type Stat = {
  value: string;
  label: string;
  note?: string;
};

const PROBLEM_STATS: Stat[] = [
  {
    value: "11% → 4.54%",
    label: "CTR collapse, Sep 2025 → Aug",
    note: "Branded search held; non-branded discovery was eroding month over month.",
  },
  {
    value: "2,245 / 38",
    label: "“Restaurants near me” impressions vs. clicks",
    note: "High visibility on a high-intent local query — almost no clicks captured.",
  },
  {
    value: "−18%",
    label: "Drop in location-based clicks",
    note: "The exact traffic a local restaurant cannot afford to lose.",
  },
];

const SEO_PILLARS = [
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Audited NAP consistency, neighborhood targeting, and local intent across SB / Goleta / Isla Vista.",
  },
  {
    icon: Store,
    title: "Google Business Profile",
    body: "Reviewed categories, photos, hours, posts, and Q&A as a discovery surface in its own right.",
  },
  {
    icon: Search,
    title: "Website Optimization",
    body: "On-page titles, headings, internal links, and crawlability of the highest-intent pages.",
  },
  {
    icon: PenLine,
    title: "Menu SEO",
    body: "Structured menu and item content so high-intent dishes were actually indexable, not trapped in images.",
  },
  {
    icon: Star,
    title: "Review Strategy",
    body: "Volume, recency, and response cadence — treated as a ranking signal, not a customer-service afterthought.",
  },
  {
    icon: BarChart3,
    title: "Mobile Performance",
    body: "Speed, layout, and tap-target quality on the device most local search actually happens on.",
  },
] as const;

const COMPETITORS = [
  "Eureka!",
  "Benchmark Eatery",
  "The Lark",
  "Finney's Crafthouse",
  "Mesa Burger",
];

const CONTENT_PILLARS = [
  {
    title: "Food & Quality",
    body: "Hero menu items shot to make the food the headline — the reason people keep coming back.",
  },
  {
    title: "Community & Local Engagement",
    body: "Special-needs community partnerships, local events, and the “help great people” half of the mission.",
  },
  {
    title: "Behind the Scenes",
    body: "The team, the prep, the daily texture of the restaurant — the trust layer for a family-friendly brand.",
  },
  {
    title: "Promotions & Value",
    body: "Limited-time offers and combos framed as warm invitations, not aggressive sales.",
  },
  {
    title: "Lifestyle & Customer Moments",
    body: "Real customers, real visits — UGC-friendly content that signals belonging.",
  },
] as const;

const RESULTS: Stat[] = [
  {
    value: "12–14 → 9–11",
    label: "Average search position",
    note: "Moved into the top of page one for tracked queries.",
  },
  {
    value: "~900 → 1,100+",
    label: "Daily impressions",
    note: "Visibility grew without diluting relevance.",
  },
  {
    value: "100 → 150",
    label: "Daily clicks",
    note: "Higher-intent traffic followed the position gains.",
  },
  {
    value: "8–12%",
    label: "CTR held steady",
    note: "Stable click-through even as impressions rose — the new traffic was qualified.",
  },
  {
    value: "+78%",
    label: "Catering page clicks",
    note: "A direct revenue surface, not just a content page.",
  },
  {
    value: "+80%",
    label: "Products page clicks",
    note: "Highest-gain page in the quarter.",
  },
];

const TONE_AXES = [
  { left: "Friendly", right: "Formal", lean: "left" as const, note: "Warm, neighborly — not corporate." },
  { left: "Playful", right: "Serious", lean: "left" as const, note: "Lighthearted, but never glib." },
  { left: "Trend-driven", right: "Timeless", lean: "right" as const, note: "Mission-rooted; trends are guests, not the host." },
  { left: "Bold", right: "Calm", lean: "right" as const, note: "Confident without shouting." },
  { left: "Community", right: "Product", lean: "left" as const, note: "People first; the food is how we show up for them." },
];

export default function CaseStudyKylesKitchen() {
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
              Case Study · UCSB AMA × Kyle's Kitchen · 2026
            </span>
          </div>

          <h1 className="display leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5.25rem)]">
            <span className="block">
              <LetterRise text="An SEO and social plan" baseDelay={120} />
            </span>
            <span className="block">
              <LetterRise text="for a mission-driven restaurant." baseDelay={260} />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[60ch]"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            A full SEO and social media marketing strategy for Kyle's Kitchen
            — a family-friendly, fast-casual restaurant in Santa Barbara —
            built to fix non-branded discovery, hold the brand's warm voice,
            and ship measurable performance gains inside one quarter.
          </p>

          {/* Meta strip */}
          <dl
            className="hero-rise mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[color:var(--color-line)] pt-6"
            style={{ ["--hero-delay" as never]: "780ms" } as CSSProperties}
          >
            {[
              { label: "Brief", value: "Grow non-branded organic traffic" },
              { label: "Format", value: "AMA client engagement" },
              { label: "Role", value: "SEO · Analytics · Content strategy" },
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
              href="/pdfs/kyles-kitchen-marketing-report-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="press group inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Read full report</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── The Client ────────────────────────────────────────── */}
      <Section id="client" eyebrow="The Client" title="Kyle's Kitchen — “eat great food, help great people.”">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7 space-y-5">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              Kyle's Kitchen is a family-friendly, fast-casual American
              restaurant serving the Santa Barbara, Goleta, and Isla Vista
              area. It was founded around the family's son Kyle, who has
              special needs, and the brand is built around giving back to the
              local special-needs community.
            </p>
            <p
              className="stagger-item display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              The voice has to follow the mission: friendly, community-focused,
              and warm — not formal, not aggressive. Every recommendation in
              this engagement was filtered through that bar.
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-5 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "320ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              At a glance
            </div>
            <dl className="mt-5 divide-y divide-[color:var(--color-line)]">
              {[
                { label: "Format", value: "Fast-casual American" },
                { label: "Market", value: "Santa Barbara · Goleta · Isla Vista" },
                { label: "Audience", value: "Families + UCSB community" },
                { label: "Mission", value: "Eat great food, help great people" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                    {row.label}
                  </dt>
                  <dd className="display text-[13.5px] leading-[1.4] text-[color:var(--color-ink)] text-right">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* ── The Problem ───────────────────────────────────────── */}
      <Section
        id="problem"
        eyebrow="The Problem"
        title="Branded search held. Non-branded discovery was leaking."
        lede="Search Console told a clear story: people who already knew Kyle's Kitchen were finding it. The local diners who didn't were not."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-12">
          {PROBLEM_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-item border-t border-[color:var(--color-line)] pt-5"
              style={{ ["--stagger-delay" as never]: `${120 + i * 110}ms` } as CSSProperties}
            >
              <div className="display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                {stat.value}
              </div>
              <div className="mt-3 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {stat.label}
              </div>
              {stat.note ? (
                <p className="mt-2 display text-[13.5px] leading-[1.55] text-[color:var(--color-muted)] max-w-[40ch]">
                  {stat.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-12 display text-[14.5px] leading-[1.6] text-[color:var(--color-ink)] max-w-[68ch]">
          Underneath the metrics was a structural gap: there was no SEO
          system and no consistent content plan to convert local search
          intent into footfall. Both workstreams below were designed to
          rebuild that foundation.
        </p>
      </Section>

      {/* ── My Role ───────────────────────────────────────────── */}
      <Section id="role" eyebrow="My Role" title="SEO research, analytics, and content strategy.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <p
            className="stagger-item md:col-span-7 display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
            style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
          >
            Worked on a small team and owned the analytical and strategic
            spine of the report — the SEO research, the GSC and GA4 reads,
            the competitive teardown, the keyword work, and the brand-voice
            and content systems that made the social plan actually
            executable.
          </p>

          <ul className="md:col-span-5 space-y-3">
            {[
              "SEO research + on-page implementation",
              "Google Search Console + Google Analytics interpretation",
              "Competitive analysis + keyword research",
              "Brand voice + content strategy",
              "Social media planning + calendar design",
            ].map((skill, i) => (
              <li
                key={skill}
                className="stagger-item flex items-start gap-3 display text-[14px] leading-[1.5] text-[color:var(--color-ink)]"
                style={{ ["--stagger-delay" as never]: `${200 + i * 90}ms` } as CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="mono mt-[3px] text-[10px] tracking-[0.2em] text-[color:var(--color-muted)]"
                >
                  →
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── What We Did ───────────────────────────────────────── */}
      <Section
        id="approach"
        eyebrow="What We Did"
        title="Two workstreams: SEO and social, run in parallel."
        lede="One rebuilt the discovery surface. The other made sure that, once people landed, the brand sounded like itself."
      >
        {/* Workstream 1 — SEO */}
        <article className="border-t border-[color:var(--color-line)] pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  01
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  Workstream
                </span>
              </div>
              <h3 className="mt-3 display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
                SEO Strategy
              </h3>
              <p className="mt-4 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[36ch]">
                Establish a baseline in Search Console, audit the discovery
                surface across six pillars, benchmark against local
                competitors, and ship on-page changes anchored to real
                keyword intent.
              </p>
            </div>

            <div className="md:col-span-8 space-y-10">
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                  <LineChart className="h-3 w-3" aria-hidden="true" />
                  Baseline
                </div>
                <p className="mt-3 display text-[13.5px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch]">
                  Pulled clicks, impressions, CTR, and average position from
                  Google Search Console as the analytical floor for every
                  decision that followed.
                </p>
              </div>

              <div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                  <Layers className="h-3 w-3" aria-hidden="true" />
                  Six SEO pillars
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {SEO_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.title} className="flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h4 className="display text-[14px] font-medium tracking-[-0.01em] text-[color:var(--color-ink)]">
                            {pillar.title}
                          </h4>
                          <p className="mt-1 text-[13px] leading-[1.55] text-[color:var(--color-muted)]">
                            {pillar.body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                    <Target className="h-3 w-3" aria-hidden="true" />
                    Competitor set
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {COMPETITORS.map((c) => (
                      <li
                        key={c}
                        className="mono text-[9.5px] tracking-[0.14em] text-[color:var(--color-ink)] border border-[color:var(--color-line)] rounded px-2 py-[3px] bg-[color:var(--color-surface)]"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[color:var(--color-muted)] max-w-[40ch]">
                    Benchmarked each on the same six pillars to surface SEO
                    gaps Kyle's Kitchen could realistically close.
                  </p>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                    <Search className="h-3 w-3" aria-hidden="true" />
                    Keyword + on-page
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[color:var(--color-muted)] max-w-[40ch]">
                    Built a keyword research table around high-intent local
                    queries, then aligned page titles, headings, and body
                    content on the menu and location pages to match.
                  </p>
                </div>
              </div>

              <div className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                  Adjacent threat
                </div>
                <p className="mt-2 display text-[13.5px] leading-[1.55] text-[color:var(--color-ink)]">
                  Also analyzed the competitive risk of Raising Cane's opening
                  nearby — what their entry would do to local search demand,
                  and how Kyle's Kitchen could defend share of intent.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Workstream 2 — Social */}
        <article className="mt-16 border-t border-[color:var(--color-line)] pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  02
                </span>
                <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                  Workstream
                </span>
              </div>
              <h3 className="mt-3 display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Social Media Strategy
              </h3>
              <p className="mt-4 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[36ch]">
                Translate the brand's mission into a usable system: a tone
                guide, five content pillars, eight reusable templates, and a
                month-long calendar the team could ship from week one.
              </p>
            </div>

            <div className="md:col-span-8 space-y-10">
              <div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                  <Megaphone className="h-3 w-3" aria-hidden="true" />
                  Tone of voice
                </div>
                <ul className="mt-4 space-y-3">
                  {TONE_AXES.map((axis) => (
                    <li key={`${axis.left}-${axis.right}`}>
                      <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                        <span className={axis.lean === "left" ? "text-[color:var(--color-ink)]" : ""}>
                          {axis.left}
                        </span>
                        <span className={axis.lean === "right" ? "text-[color:var(--color-ink)]" : ""}>
                          {axis.right}
                        </span>
                      </div>
                      <div className="relative mt-2 h-1 w-full bg-[color:var(--color-line)] rounded">
                        <div
                          className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[color:var(--color-ink)]"
                          style={{ left: axis.lean === "left" ? "18%" : "82%", transform: "translate(-50%, -50%)" }}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-2 text-[12.5px] leading-[1.5] text-[color:var(--color-muted)]">
                        {axis.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                  <Layers className="h-3 w-3" aria-hidden="true" />
                  Five content pillars
                </div>
                <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {CONTENT_PILLARS.map((p, i) => (
                    <li key={p.title} className="flex items-start gap-3">
                      <span className="mono text-[10px] tracking-[0.2em] text-[color:var(--color-muted)] mt-[3px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h4 className="display text-[14px] font-medium tracking-[-0.01em] text-[color:var(--color-ink)]">
                          {p.title}
                        </h4>
                        <p className="mt-1 text-[13px] leading-[1.55] text-[color:var(--color-muted)] max-w-[40ch]">
                          {p.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <SystemTile
                  icon={<PenLine className="h-3 w-3" aria-hidden="true" />}
                  label="Reusable templates"
                  value="8"
                  body="Modular post formats the team can re-skin weekly without rebuilding from scratch."
                />
                <SystemTile
                  icon={<Calendar className="h-3 w-3" aria-hidden="true" />}
                  label="Content calendar"
                  value="4-week"
                  body="March 2026 calendar across Instagram, TikTok, and Reels — channel-native, not cross-posted."
                />
                <SystemTile
                  icon={<Sparkles className="h-3 w-3" aria-hidden="true" />}
                  label="Trend playbook"
                  value="Do's & Don'ts"
                  body="A short trend guide tuned to a family-friendly, mission-led brand."
                />
              </div>
            </div>
          </div>
        </article>
      </Section>

      {/* ── Results ───────────────────────────────────────────── */}
      <Section
        id="results"
        eyebrow="Results"
        title="One quarter of measurable SEO gains."
        lede="Search Console data, before and after — the metrics that mattered to a local restaurant trying to capture nearby intent."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {RESULTS.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-item border-t border-[color:var(--color-line)] pt-5"
              style={{ ["--stagger-delay" as never]: `${120 + i * 90}ms` } as CSSProperties}
            >
              <div className="display text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                {stat.value}
              </div>
              <div className="mt-3 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {stat.label}
              </div>
              {stat.note ? (
                <p className="mt-2 display text-[13.5px] leading-[1.55] text-[color:var(--color-muted)] max-w-[40ch]">
                  {stat.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mt-12 display text-[14.5px] leading-[1.6] text-[color:var(--color-ink)] max-w-[68ch]">
          The headline read on the data: visibility went up and CTR didn't
          collapse. That combination is what a healthy SEO foundation
          actually looks like — more impressions, qualified clicks, and the
          biggest gains landing on the pages closest to revenue.
        </p>
      </Section>

      {/* ── Takeaways ─────────────────────────────────────────── */}
      <Section
        id="takeaways"
        eyebrow="What I'm taking into the next role"
        title="Search Console, translated into a plan."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-8 space-y-6">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Comfortable in Google Search Console and GA4 — pulled the
                baseline, found the leaks, and used the same tools to
                measure whether the fix actually moved the numbers.
              </span>
            </p>
            <p
              className="stagger-item display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Translated performance data into actionable strategy:
                competitor and keyword work led directly to on-page
                changes that landed Catering and Products as the highest-
                gain pages of the quarter.
              </span>
            </p>
            <p
              className="stagger-item display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "360ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Built content systems that a real team can run — tone
                guide, five pillars, eight templates, and a four-week
                calendar — so brand consistency and growth aren't
                competing priorities.
              </span>
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-4 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "480ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Read the full report
            </div>
            <p className="mt-3 display text-[14px] leading-[1.55] text-[color:var(--color-ink)]">
              Full SEO audit, competitor analysis, keyword tables, tone
              guide, content pillars, templates, and the March 2026
              calendar live in the report.
            </p>
            <a
              href="/pdfs/kyles-kitchen-marketing-report-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="press group mt-5 inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
            >
              <span className="link-ink">Open the PDF</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </aside>
        </div>
      </Section>

      {/* ── Footer nav ─────────────────────────────────────────── */}
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

function SystemTile({
  icon,
  label,
  value,
  body,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
      <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
        {icon}
        {label}
      </div>
      <div className="mt-3 display text-[clamp(1.5rem,3vw,2rem)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
        {value}
      </div>
      <p className="mt-2 text-[13px] leading-[1.55] text-[color:var(--color-muted)]">
        {body}
      </p>
    </div>
  );
}
