import type { CSSProperties } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Layers,
  PlayCircle,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Section from "../components/Section";
import LetterRise from "../components/LetterRise";
import { useInView } from "../hooks/useInView";

type StatCard = {
  value: string;
  label: string;
  note?: string;
};

const RESEARCH_STATS: StatCard[] = [
  {
    value: "168",
    label: "College students surveyed",
    note: "23-question instrument across multiple universities",
  },
  {
    value: "61.9%",
    label: "Attended multiple MLB games",
    note: "Yet only 20.8% described themselves as “very familiar” with the league",
  },
  {
    value: "60.7%",
    label: "Cite player personality as a key motivator",
    note: "The fandom hook is people, not box scores",
  },
  {
    value: "57.7%",
    label: "Prefer short-form content",
    note: "TikTok, Reels, and YouTube Shorts over long broadcast cuts",
  },
  {
    value: "47%",
    label: "See MLB as culturally relevant",
    note: "A majority sit on the fence — recoverable, not lost",
  },
  {
    value: "30 pts",
    label: "Reach gap on social",
    note: "~80% of Gen Z is on TikTok/Instagram, ~50% see MLB content there",
  },
];

type Campaign = {
  index: string;
  name: string;
  thesis: string;
  audience: string;
  mechanic: string[];
  kpis: string[];
};

const CAMPAIGNS: Campaign[] = [
  {
    index: "01",
    name: "MLB Campus Bases",
    thesis:
      "Bring the league to where Gen Z already gathers — campus — and turn a single afternoon of awareness into a measurable funnel into the MLB app.",
    audience: "College students at 50 target universities",
    mechanic: [
      "Pop-up activations on 50 campuses",
      "Branded merch + beverage collabs (Monster, Celsius)",
      "QR-led conversion path from event to MLB app",
    ],
    kpis: [
      "60K student registrations",
      "40K MLB app sign-ups",
      "Conversion rate from QR scan → app install",
    ],
  },
  {
    index: "02",
    name: "Out of Left Field",
    thesis:
      "Humanize MLB players with the same unscripted, personality-led content that already wins on TikTok — close the gap between attending games and feeling like a fan.",
    audience: "Gen Z social audiences on TikTok, Reels, and YouTube Shorts",
    mechanic: [
      "Recurring short-form series built around player personality",
      "Unscripted, behind-the-scenes moments over broadcast b-roll",
      "Content cadence designed for the algorithm, not the broadcast schedule",
    ],
    kpis: [
      "150M collective views across TikTok, Reels, and Shorts",
      "Engagement rate vs. league baseline",
      "Follower growth on official MLB short-form channels",
    ],
  },
  {
    index: "03",
    name: "MLB × MrBeast — Beastball",
    thesis:
      "Borrow Gen Z attention from where it already lives. Pair the league with the most-watched creator on Earth, attach a philanthropy hook, and give fans something to make themselves.",
    audience: "MrBeast’s global Gen Z audience + lapsed MLB casuals",
    mechanic: [
      "Challenge-format videos co-produced with MrBeast",
      "Philanthropy tie-in to give the partnership cultural weight",
      "Fan-led hashtag challenge to extend reach into UGC",
    ],
    kpis: [
      "250M views per video",
      "5% lift in Gen Z viewership of MLB content",
      "Hashtag-challenge participation volume",
    ],
  },
];

type FrameworkItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const FRAMEWORK: FrameworkItem[] = [
  {
    icon: Layers,
    title: "PESTLE + SWOT",
    body: "Full macro scan and an internal audit of where MLB is strong, exposed, and slow — used to choose which Gen Z fronts were worth fighting on.",
  },
  {
    icon: Target,
    title: "Competitive landscape",
    body: "Benchmarked the NFL, NBA, and NHL on social cadence, creator strategy, and short-form distribution to find the white space MLB could actually own.",
  },
  {
    icon: Users,
    title: "Psychographic segmentation",
    body: "Cut the Gen Z audience by motivation — culture-led, player-led, social-led — so each campaign had a defensible target instead of a generic “young people” brief.",
  },
  {
    icon: BarChart3,
    title: "Phased timelines + budget framework",
    body: "Each campaign laddered into a phased rollout with a budget framework, so the plan reads as something a marketing team could actually staff and execute.",
  },
];

export default function CaseStudyMlb() {
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
              Case Study · UCSB AMA × MLB · 2025–2026
            </span>
          </div>

          <h1 className="display leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,7vw,5.25rem)]">
            <span className="block">
              <LetterRise text="Reaching Gen Z" baseDelay={120} />
            </span>
            <span className="block">
              <LetterRise text="for Major League Baseball." baseDelay={260} />
            </span>
          </h1>

          <p
            className="hero-rise mt-8 display text-[16px] sm:text-[18px] leading-[1.55] text-[color:var(--color-ink)] max-w-[60ch]"
            style={{ ["--hero-delay" as never]: "650ms" } as CSSProperties}
          >
            A full strategic marketing plan, written for the UCSB AMA × MLB
            Case Competition, to re-engage Gen Z with Major League Baseball —
            grounded in original primary research and built around three
            campaigns the league could actually ship.
          </p>

          {/* Meta strip */}
          <dl
            className="hero-rise mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-[color:var(--color-line)] pt-6"
            style={{ ["--hero-delay" as never]: "780ms" } as CSSProperties}
          >
            {[
              { label: "Brief", value: "Re-engage Gen Z with MLB" },
              { label: "Format", value: "National case competition" },
              { label: "Role", value: "Research · Strategy · Insights" },
              { label: "Year", value: "2025–2026" },
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
              href="/pdfs/ucsb-mlb-case-competition.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="press group inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
            >
              <span className="link-ink">View full deck</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem ───────────────────────────────────────── */}
      <Section id="problem" eyebrow="The Problem" title="MLB is losing the next generation.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              MLB’s structural problem with Gen Z isn’t that the games are bad
              — it’s that the league shows up in the wrong places, in the
              wrong format, at the wrong length. Long broadcasts compete with
              algorithmic short-form. A thin social presence competes with
              leagues that have been creator-first for years.
            </p>
            <p
              className="stagger-item mt-5 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              The clearest tension we found is a 30-point reach gap: roughly
              80% of Gen Z is active on TikTok and Instagram, but only ~50% of
              that audience is ever exposed to MLB content there. Every
              campaign in this plan is built to close that gap.
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-5 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "320ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              The 30-point gap
            </div>
            <div className="mt-5 space-y-5">
              <GapBar label="Gen Z on TikTok / Instagram" pct={80} />
              <GapBar label="Gen Z exposed to MLB content there" pct={50} />
            </div>
            <p className="mt-6 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              Source · Primary research + secondary platform data
            </p>
          </aside>
        </div>
      </Section>

      {/* ── My Role ───────────────────────────────────────────── */}
      <Section id="role" eyebrow="My Role" title="Research, insight synthesis, and campaign strategy.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <p
            className="stagger-item md:col-span-7 display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
            style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
          >
            Worked on a small team, owned the analytical spine of the deck:
            the market research, the PESTLE and SWOT, the consumer-insight
            synthesis from our primary survey, and the strategic logic that
            tied each campaign back to a specific Gen Z behavior we measured.
          </p>

          <ul className="md:col-span-5 space-y-3">
            {[
              "Market research + PESTLE / SWOT",
              "Consumer insight synthesis",
              "Primary research design (23-question survey)",
              "Audience segmentation",
              "Campaign strategy + KPI framing",
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

      {/* ── Primary Research ──────────────────────────────────── */}
      <Section
        id="research"
        eyebrow="Primary Research"
        title="What 168 college students told us."
        lede="A 23-question survey distributed across multiple universities. The numbers below shaped every strategic choice that followed."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {RESEARCH_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stagger-item border-t border-[color:var(--color-line)] pt-5"
              style={{ ["--stagger-delay" as never]: `${120 + i * 90}ms` } as CSSProperties}
            >
              <div className="display text-[clamp(2rem,4vw,2.75rem)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
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
          The headline finding is the engagement gap: most Gen Z respondents
          have already been to multiple MLB games, but only 1 in 5 feels truly
          familiar with the league. That gap — between attendance and fandom
          — became the strategic problem each campaign was designed to solve.
        </p>
      </Section>

      {/* ── Campaign Concepts ─────────────────────────────────── */}
      <Section
        id="campaigns"
        eyebrow="Campaign Concepts"
        title="Three campaigns the league could actually ship."
        lede="Each one targets a specific Gen Z behavior our research surfaced — culture, personality, and short-form attention — and ladders to a measurable KPI."
      >
        <div className="space-y-12">
          {CAMPAIGNS.map((c, i) => (
            <article
              key={c.name}
              className="stagger-item grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-[color:var(--color-line)] pt-10"
              style={{ ["--stagger-delay" as never]: `${120 + i * 140}ms` } as CSSProperties}
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                    {c.index}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                    Campaign
                  </span>
                </div>
                <h3 className="mt-3 display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
                  {c.name}
                </h3>
                <p className="mt-4 display text-[14.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[36ch]">
                  {c.thesis}
                </p>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8">
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                    <Users className="h-3 w-3" aria-hidden="true" />
                    Audience
                  </div>
                  <p className="mt-3 display text-[13.5px] leading-[1.55] text-[color:var(--color-ink)]">
                    {c.audience}
                  </p>
                </div>

                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                    <PlayCircle className="h-3 w-3" aria-hidden="true" />
                    Mechanic
                  </div>
                  <ul className="mt-3 space-y-2">
                    {c.mechanic.map((m) => (
                      <li
                        key={m}
                        className="display text-[13.5px] leading-[1.5] text-[color:var(--color-ink)]"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] inline-flex items-center gap-2">
                    <BarChart3 className="h-3 w-3" aria-hidden="true" />
                    KPIs
                  </div>
                  <ul className="mt-3 space-y-2">
                    {c.kpis.map((k) => (
                      <li
                        key={k}
                        className="display text-[13.5px] leading-[1.5] text-[color:var(--color-ink)]"
                      >
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Strategic Framework ──────────────────────────────── */}
      <Section
        id="framework"
        eyebrow="Strategic Framework"
        title="The analysis behind the campaigns."
        lede="The deck doesn’t just propose three ideas — every concept is supported by the same underlying analytical work."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {FRAMEWORK.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="stagger-item flex items-start gap-4"
                style={{ ["--stagger-delay" as never]: `${120 + i * 110}ms` } as CSSProperties}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="display text-[16px] font-medium tracking-[-0.01em] text-[color:var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-[color:var(--color-muted)] max-w-[46ch]">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Takeaways ─────────────────────────────────────────── */}
      <Section
        id="takeaways"
        eyebrow="What I'm taking into the next role"
        title="Primary research, translated into a plan."
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-8 space-y-6">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Designed and shipped a real piece of primary research, then
                turned 168 student responses into the through-line of an
                entire strategic plan — exactly the loop I want to run on a
                growth or analytics team.
              </span>
            </p>
            <p
              className="stagger-item display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Translated soft audience signals (player personality, cultural
                relevance, short-form preference) into concrete campaign
                mechanics and measurable KPIs — not slogans.
              </span>
            </p>
            <p
              className="stagger-item display text-[15px] leading-[1.6] text-[color:var(--color-ink)] max-w-[60ch] inline-flex items-start gap-3"
              style={{ ["--stagger-delay" as never]: "360ms" } as CSSProperties}
            >
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-muted)]" aria-hidden="true" />
              <span>
                Built campaigns audience-first: each one ladders from a
                specific Gen Z behavior, to a channel-native mechanic, to a
                number a marketing team could be held accountable for.
              </span>
            </p>
          </div>

          <aside
            className="stagger-item md:col-span-4 rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
            style={{ ["--stagger-delay" as never]: "480ms" } as CSSProperties}
          >
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              Read the full deck
            </div>
            <p className="mt-3 display text-[14px] leading-[1.55] text-[color:var(--color-ink)]">
              Full PESTLE, SWOT, segmentation, campaign timelines, and budget
              frameworks live in the deck.
            </p>
            <a
              href="/pdfs/ucsb-mlb-case-competition.pdf"
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

function GapBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
        <span>{label}</span>
        <span className="text-[color:var(--color-ink)]">{pct}%</span>
      </div>
      <div className="mt-2 h-1 w-full bg-[color:var(--color-line)] rounded">
        <div
          className="h-1 rounded bg-[color:var(--color-ink)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
