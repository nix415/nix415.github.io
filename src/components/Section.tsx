import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  number?: string;
  lede?: string;
  children: ReactNode;
};

/**
 * Editorial section — giant serif title with optional big Roman numeral,
 * a mono eyebrow, an ornamental horizontal rule, and an optional lede.
 */
export default function Section({
  id,
  title,
  eyebrow,
  number,
  lede,
  children,
}: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 md:py-24 scroll-mt-24 reveal ${
        inView ? "is-visible" : ""
      }`}
    >
      {/* Top metadata rule */}
      <div
        className="flex items-center justify-between border-t border-[color:var(--color-line)] pt-3 pb-10 stagger-item"
        style={{ ["--stagger-delay" as never]: "0ms" } as CSSProperties}
      >
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
          {eyebrow ?? title}
        </span>
        {number && (
          <span className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">
            {number}
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          {number && (
            <div
              className="display-italic text-[color:var(--color-accent)] text-6xl md:text-7xl leading-none mb-4 stagger-item"
              style={{ ["--stagger-delay" as never]: "80ms" } as CSSProperties}
            >
              {number}
            </div>
          )}
          <h2
            className="display text-4xl md:text-5xl leading-[1.02] tracking-tight stagger-item"
            style={{ ["--stagger-delay" as never]: "140ms" } as CSSProperties}
          >
            {title}
          </h2>
          {lede && (
            <p
              className="mt-5 text-[color:var(--color-muted)] text-base md:text-lg leading-relaxed max-w-[28rem] stagger-item"
              style={{ ["--stagger-delay" as never]: "220ms" } as CSSProperties}
            >
              {lede}
            </p>
          )}
        </div>

        <div
          className="md:col-span-7 stagger-item"
          style={{ ["--stagger-delay" as never]: "300ms" } as CSSProperties}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
