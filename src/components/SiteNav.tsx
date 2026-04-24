import { useEffect, useState } from "react";
import { Home, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

type NavLink = {
  id: string;
  label: string;
};

const LINKS: NavLink[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/**
 * Fixed, centered pill nav. Condenses (shrinks padding + raises bg opacity)
 * once the user has scrolled past ~40px. Shows an ink dot on the currently
 * active section and exposes a dark-mode toggle on the right.
 */
export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  const active = useActiveSection(onHome ? LINKS.map((l) => l.id) : []);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastY = window.scrollY;
    const HIDE_AFTER = 120;
    const DELTA = 6;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const diff = y - lastY;
      if (Math.abs(diff) < DELTA) return;

      if (y < HIDE_AFTER) {
        setHidden(false);
      } else if (diff > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    if (!onHome) {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goHome = () => {
    if (!onHome) {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // When arriving at "/" with a hash (e.g. /#work from the case study page),
  // scroll the matching section into view after the homepage mounts.
  useEffect(() => {
    if (!onHome) return;
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [onHome, location.hash, location.pathname]);

  return (
    <header
      data-hidden={hidden ? "true" : "false"}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none transition-transform duration-300 ease-out data-[hidden=true]:-translate-y-[calc(100%+1rem)]"
    >
      <div className="mx-auto w-fit pointer-events-auto">
        <nav
          aria-label="Primary"
          data-scrolled={scrolled ? "true" : "false"}
          className="nav-pill flex items-center gap-1 rounded-full px-3 py-3 bg-[color:color-mix(in_oklch,var(--color-surface)_75%,transparent)] backdrop-blur-md"
        >
          <button
            type="button"
            onClick={goHome}
            className="press inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[color:var(--color-line)]/60"
            aria-label={onHome ? "Back to top" : "Back to home"}
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
                    className="press mono group relative inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-[color:var(--color-line)]/60"
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
