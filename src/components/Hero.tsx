import { useCallback, type MouseEvent } from "react";
import { SITE } from "../data/site";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  el.classList.remove("section-land");
  void el.offsetWidth;
  el.classList.add("section-land");
  window.setTimeout(() => el.classList.remove("section-land"), 900);
}

export default function Hero() {
  const { headline, imageUrl } = SITE.hero;

  const onNavProjects = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("projects");
  }, []);

  const onNavContact = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("contact");
  }, []);

  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-24 scroll-mt-24">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.3em] uppercase text-[color:var(--color-muted)] mb-6">
            Portfolio
          </p>
          <h1 className="serif text-5xl md:text-6xl leading-[1.05]">
            {headline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={onNavProjects}
              className="px-5 py-2.5 rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-bg)] text-sm font-medium hover:opacity-90 transition-all active:scale-[0.97]"
            >
              View projects
            </a>
            <a
              href="#contact"
              onClick={onNavContact}
              className="px-5 py-2.5 rounded-full border border-[color:var(--color-line)] text-sm font-medium hover:bg-[color:var(--color-surface)] transition-all active:scale-[0.97]"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)] flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={SITE.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-[color:var(--color-muted)] text-sm">
                Add a photo in <code>src/data/site.ts</code>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
