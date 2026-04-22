import { SITE } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_IDS: Record<string, string> = {
  Home: "home",
  Projects: "projects",
  Contact: "contact",
};

export default function Header() {
  const navIds = SITE.nav.map((item) => SECTION_IDS[item] ?? item.toLowerCase());
  const active = useActiveSection(navIds);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[color:var(--color-bg)]/85 border-b border-[color:var(--color-line)]">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <a href="#home" className="press flex items-baseline gap-3">
          <span className="display text-xl leading-none tracking-tight">
            {SITE.name}
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)] hidden sm:inline">
            {SITE.issue.number} · {SITE.issue.edition}
          </span>
        </a>

        <nav className="flex items-center gap-5 text-sm mono uppercase tracking-[0.22em]">
          {SITE.nav.map((item) => {
            const id = SECTION_IDS[item] ?? item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative press transition-colors text-[11px] ${
                  isActive
                    ? "text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1.5 left-0 right-0 mx-auto h-[2px] bg-[color:var(--color-accent)] rounded-full transition-all duration-300 ${
                    isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
