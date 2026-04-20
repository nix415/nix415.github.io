import { SITE } from "../data/site";

const SECTION_IDS: Record<string, string> = {
  Home: "home",
  Projects: "projects",
  Contact: "contact",
};

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[color:var(--color-bg)]/80">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#home" className="serif text-2xl tracking-tight">
          {SITE.name}
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {SITE.nav.map((item) => (
            <a
              key={item}
              href={`#${SECTION_IDS[item] ?? item.toLowerCase()}`}
              className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
