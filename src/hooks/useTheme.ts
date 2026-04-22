import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "dark" : "light";
}

/**
 * Tracks the current theme, mirrors it to `html.dark`, and persists the
 * user's preference to localStorage. Also listens for system preference
 * changes when no explicit preference has been saved.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => readInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return;
      setThemeState(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem("theme", next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, setTheme, toggleTheme } as const;
}
