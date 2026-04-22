import { useEffect, useState } from "react";
import { Home, Moon, Sun } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { SITE } from "../data/site";

type NavLink = {
  id: string;
  label: string;
};

const LINKS: NavLink[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/**
 * Fixed, centered pill nav. Condenses (shrinks padding + raises bg opacity)
 * once the user has scrolled past ~40px. Shows an ink dot on the currently
 * active section and exposes a dark-mode toggle on the right.
 */
export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-auto w-fit pointer-events-auto">
        <nav
          aria-label="Primary"
          data-scrolled={scrolled ? "true" : "false"}
          className="nav-pill flex items-center gap-1 rounded-full px-3 py-3 bg-[color:color-mix(in_oklch,var(--color-surface)_75%,transparent)] backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="press inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[color:var(--color-line)]/60"
            aria-label="Back to top"
          >
            <Home className="h-4 w-4" />
          </button>

          <div className="mx-1 h-5 w-px bg-[color:var(--color-line)]" />

          <ul className="flex items-center">
            {LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(link.id)}
                    className="press mono group relative inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-[color:var(--color-line)]/60"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[color:var(--color-ink)] scale-100"
                          : "bg-[color:var(--color-ink)] scale-0"
                      }`}
                    />
                    <span
                      className={
                        isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                      }
                    >
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href={SITE.contact.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="press mono inline-flex items-center rounded-full px-3 sm:px-4 py-2 text-[11px] uppercase tracking-[0.2em] opacity-80 hover:opacity-100 hover:bg-[color:var(--color-line)]/60"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="mx-1 h-5 w-px bg-[color:var(--color-line)]" />

          <button
            type="button"
            onClick={toggleTheme}
            className="press inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[color:var(--color-line)]/60"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
