import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { SITE } from "./data/site";
import { PROJECTS } from "./data/projects";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="introduction" title={SITE.intro.title}>
          <p className="text-base md:text-lg leading-relaxed text-[color:var(--color-ink)] max-w-2xl">
            {SITE.intro.body}
          </p>
          <Skills />
        </Section>

        <Section id="projects" title={SITE.projectsSection.title}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={p.name}
                title={p.name}
                description={p.description}
                imgSrc={p.imgSrc}
                link={p.link}
                linkText={p.linkText}
                secondaryLink={p.secondaryLink}
                className="stagger-item"
                style={{ ["--stagger-delay" as never]: `${i * 80}ms` }}
              />
            ))}
          </div>
        </Section>

        <Section id="contact" title={SITE.contact.title}>
          <Contact />
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-[color:var(--color-muted)] flex justify-between">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <a href="#home" className="hover:text-[color:var(--color-ink)]">Back to top ↑</a>
      </footer>
    </>
  );
}
