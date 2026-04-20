import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
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
          <p className="text-lg leading-relaxed text-[color:var(--color-ink)]">
            {SITE.intro.body}
          </p>
        </Section>

        <Section id="projects" title={SITE.projectsSection.title}>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard
                key={p.name}
                title={p.name}
                description={p.description}
                imgSrc={p.imgSrc}
                link={p.link}
                linkText={p.linkText}
                secondaryLink={p.secondaryLink}
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
