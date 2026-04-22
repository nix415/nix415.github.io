import type { CSSProperties } from "react";
import { SITE } from "../data/site";

/**
 * Editorial contact list — a colophon-style column where each row
 * has a small mono label on the left, dotted leader filling the
 * middle, and the value (link) aligned right.
 */
export default function Contact() {
  const { email, github, linkedin } = SITE.contact;
  const links = [
    { label: "Email", value: email, href: `mailto:${email}` },
    { label: "GitHub", value: "github.com/nix415", href: github },
    { label: "LinkedIn", value: "linkedin.com/in/nixontse", href: linkedin },
  ];
  return (
    <ul className="flex flex-col">
      {links.map((l, i) => (
        <li
          key={l.label}
          className="stagger-item border-b border-dashed border-[color:var(--color-line)] last:border-b-0"
          style={
            {
              ["--stagger-delay" as never]: `${200 + i * 90}ms`,
            } as CSSProperties
          }
        >
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={
              l.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="press flex items-center justify-between gap-4 py-4 group"
          >
            <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
              {l.label}
            </span>
            <span className="display-italic text-lg md:text-xl text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)] transition-colors">
              {l.value} <span aria-hidden>→</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
