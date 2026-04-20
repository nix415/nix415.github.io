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
    <header className="sticky top-0 z-30 backdrop-blur bg-[color:var(--color-bg)]/80">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#home" className="display text-xl tracking-tight press">
          {SITE.name}
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {SITE.nav.map((item) => {
            const id = SECTION_IDS[item] ?? item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative press transition-colors ${
                  isActive
                    ? "text-[color:var(--color-ink)] font-medium"
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
