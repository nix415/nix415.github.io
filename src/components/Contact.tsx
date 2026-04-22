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
        <p className="display text-[15px] leading-[1.55] text-[color:var(--color-muted)] max-w-[52ch]">
          Whether it's an internship, a full-time growth role, or a coffee
          chat about marketing analytics — I'd love to hear what you're
          working on.
        </p>
      </div>

      <div className="md:col-span-5">
        <dl className="border-t border-[color:var(--color-line)]">
          <div className="flex flex-row flex-nowrap items-center justify-between gap-4 border-b border-[color:var(--color-line)] py-4">
            <dt className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] shrink-0">
              Email
            </dt>
            <dd className="shrink-0 whitespace-nowrap">
              <CopyableEmail email={SITE.contact.email} />
            </dd>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-row flex-nowrap items-center justify-between gap-4 border-b border-[color:var(--color-line)] py-4"
            >
              <dt className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] shrink-0">
                {row.label}
              </dt>
              <dd className="shrink-0 whitespace-nowrap">
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="press mono text-[12.5px] link-ink inline-flex flex-row items-center gap-2 whitespace-nowrap"
                  >
                    <span>{row.value}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="mono text-[12.5px] whitespace-nowrap">{row.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
