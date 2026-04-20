import { SITE } from "../data/site";

export default function Contact() {
  const { email, github, linkedin } = SITE.contact;
  const links = [
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "GitHub", value: "github.com/nix415", href: github },
    { label: "LinkedIn", value: "linkedin.com/in/nixontse", href: linkedin },
  ];
  return (
    <ul className="flex flex-col gap-2">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between py-4 px-1 rounded-xl hover:bg-[color:var(--color-surface)]/60 transition-colors group"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--color-muted)]">
              {l.label}
            </span>
            <span className="display text-lg group-hover:text-[color:var(--color-accent)] transition-colors">
              {l.value} →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
