import { SITE } from "../data/site";

export default function Contact() {
  const { email, github, linkedin } = SITE.contact;
  const links = [
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "GitHub", value: "github.com/nix415", href: github },
    { label: "LinkedIn", value: "linkedin.com/in/nixontse", href: linkedin },
  ];
  return (
    <ul className="divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between py-5 group"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--color-muted)]">
              {l.label}
            </span>
            <span className="serif text-2xl group-hover:text-[color:var(--color-accent)] transition-colors">
              {l.value} →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
