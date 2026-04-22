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
                outcome={p.outcome}
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7">
              <p className="display text-[17px] sm:text-[19px] leading-[1.6] text-[color:var(--color-ink)] max-w-[58ch]">
                {SITE.about.body}
              </p>
              <p className="mt-6 display text-[16px] sm:text-[17px] leading-[1.6] text-[color:var(--color-muted)] max-w-[58ch]">
                {SITE.about.closing}
              </p>

              {SITE.funFacts.items.length > 0 ? (
                <div className="mt-10">
                  <div className="mono text-[10.5px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                    {SITE.funFacts.label}
                  </div>
                  <ul className="mt-4 space-y-2 max-w-[58ch]">
                    {SITE.funFacts.items.map((fact, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 display text-[16px] leading-[1.6] text-[color:var(--color-ink)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mono mt-[3px] text-[11px] tracking-[0.2em] text-[color:var(--color-muted)]"
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
            <div className="md:col-span-5 space-y-10">
              <div>
                <div className="mono text-[10.5px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                  Tools &amp; Subjects
                </div>
                <div className="mt-4">
                  <Skills />
                </div>
              </div>

              <div>
                <div className="mono text-[10.5px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
                  {SITE.credentials.label}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {SITE.credentials.items.map((item, i) => (
                    <span
                      key={item}
                      className="mono text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
                    >
                      {item}
                      {i < SITE.credentials.items.length - 1 ? (
                        <span
                          className="mx-3 text-[color:var(--color-muted)]"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] md:text-center">
            {SITE.footer.updated} · {SITE.name}
          </div>
          <div className="flex md:justify-end items-center gap-4 mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
