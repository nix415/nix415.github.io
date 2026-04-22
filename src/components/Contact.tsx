import { ArrowUpRight } from "lucide-react";
import { SITE } from "../data/site";
import CopyableEmail from "./CopyableEmail";

type ColophonRow = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

export default function Contact() {
  const rows: ColophonRow[] = [
    {
      label: "GitHub",
      value: "github.com/nix415",
      href: SITE.contact.github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nixontse",
      href: SITE.contact.linkedin,
      external: true,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: SITE.contact.resumeHref,
      external: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-7">
        <p className="display text-[17px] leading-[1.55] text-[color:var(--color-muted)] max-w-[52ch]">
          Whether it's an internship, a full-time growth role, or a coffee
          chat about marketing analytics — I'd love to hear what you're
          working on.
        </p>
      </div>

      <div className="md:col-span-5">
        <dl className="border-t border-[color:var(--color-line)]">
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--color-line)] py-4">
            <dt className="mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
              Email
            </dt>
            <dd>
              <CopyableEmail email={SITE.contact.email} />
            </dd>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-[color:var(--color-line)] py-4"
            >
              <dt className="mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                {row.label}
              </dt>
              <dd>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="press inline-flex items-center gap-2 mono text-sm link-ink"
                  >
                    <span>{row.value}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="mono text-sm">{row.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
