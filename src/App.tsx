import type { CSSProperties } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SiteNav from "./components/SiteNav";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { SITE } from "./data/site";
import { PROJECTS } from "./data/projects";

export default function App() {
  return (
    <>
      <ScrollProgressBar />
      <SiteNav />

      <main>
        <Hero />

        <Section
          id="work"
          eyebrow={SITE.work.eyebrow}
          title={SITE.work.title}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.name}
                title={p.name}
                description={p.description}
                imgSrc={p.imgSrc}
                link={p.link}
                linkText={p.linkText}
                secondaryLink={p.secondaryLink}
                index={p.index}
                category={p.category}
                stats={p.stats}
                imgPosition={p.imgPosition}
                imgFit={p.imgFit}
                className="stagger-item"
                style={
                  {
                    ["--stagger-delay" as never]: `${160 + i * 100}ms`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </Section>

        <Section
          id="about"
          eyebrow={SITE.about.eyebrow}
          title={SITE.about.title}
        >
          <div className="max-w-3xl">
            <p
              className="stagger-item display text-[15px] sm:text-[17px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
            >
              {SITE.about.body}
            </p>
            <p
              className="stagger-item mt-6 display text-[14px] sm:text-[15px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]"
              style={{ ["--stagger-delay" as never]: "240ms" } as CSSProperties}
            >
              {SITE.about.closing}
            </p>

            {SITE.funFacts.items.length > 0 ? (
              <div className="mt-10">
                <div className="mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                  {SITE.funFacts.label}
                </div>
                <ul className="mt-4 space-y-2 max-w-[58ch]">
                  {SITE.funFacts.items.map((fact, i) => (
                    <li
                      key={i}
                      className="stagger-item flex items-start gap-3 display text-[14px] leading-[1.6] text-[color:var(--color-ink)]"
                      style={{ ["--stagger-delay" as never]: `${360 + i * 90}ms` } as CSSProperties}
                    >
                      <span
                        aria-hidden="true"
                        className="mono mt-[3px] text-[10px] tracking-[0.2em] text-[color:var(--color-muted)]"
                      >
                        →
                      </span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow={SITE.skills.eyebrow}
          title={SITE.skills.title}
        >
          <Skills />
        </Section>

        <Section
          id="contact"
          eyebrow={SITE.contact.eyebrow}
          title={SITE.contact.title}
        >
          <Contact />
        </Section>
      </main>

      <footer className="border-t border-[color:var(--color-line)]">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-6 items-end">
          <div />
          <div className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] md:text-center">
            {SITE.footer.updated} · {SITE.name}
          </div>
          <div className="flex md:justify-end items-center gap-4 mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
