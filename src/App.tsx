import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { SITE } from "./data/site";
import { PROJECTS } from "./data/projects";

export default function App() {
  return (
    <>
      {/* Paper grain overlay — fixed, z-1 */}
      <div className="grain" />

      <div className="relative z-10">
        <Header />

        <main>
          <Hero />

          <Marquee />

          <Section
            id="introduction"
            title={SITE.intro.title}
            eyebrow={SITE.intro.eyebrow}
            number="I."
          >
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-ink)] max-w-2xl">
              {SITE.intro.body}
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[color:var(--color-muted)] max-w-2xl display-italic">
              {SITE.intro.closing}
            </p>
            <Skills />
          </Section>

          <Section
            id="projects"
            title={SITE.projectsSection.title}
            eyebrow={SITE.projectsSection.eyebrow}
            number="II."
            lede={SITE.projectsSection.lede}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  className="stagger-item"
                  style={{ ["--stagger-delay" as never]: `${220 + i * 110}ms` }}
                />
              ))}
            </div>
          </Section>

          <Section
            id="contact"
            title={SITE.contact.title}
            eyebrow={SITE.contact.eyebrow}
            number="III."
            lede={SITE.contact.lede}
          >
            <Contact />
          </Section>
        </main>

        {/* Colophon footer */}
        <footer className="border-t border-[color:var(--color-line)]">
          <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-6 items-end">
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              Colophon
            </div>
            <div className="text-sm text-[color:var(--color-muted)] md:text-center">
              Set in Fraunces &amp; Inter. Printed on the web.
            </div>
            <div className="flex md:justify-end items-center gap-4 text-xs text-[color:var(--color-muted)]">
              <span>© {new Date().getFullYear()} {SITE.name}</span>
              <a href="#home" className="link-ink hover:text-[color:var(--color-ink)]">
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
