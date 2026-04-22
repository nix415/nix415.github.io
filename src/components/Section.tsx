import type { ReactNode } from "react";
import { useEffect } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Editorial section shell: mono eyebrow with an animated dash, serif title,
 * optional lede, then the children block. The root has `.reveal` for a
 * gentle fade-in and becomes `.is-visible` when it enters the viewport so
 * child .stagger-item and .dash elements can run their animations.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
}: Props) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) el.classList.add("is-visible");
  }, [ref, inView]);

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal scroll-mt-28 px-6 py-20 sm:py-24 md:py-32 border-t border-[color:var(--color-line)] ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <div className="mb-6 flex items-center gap-3">
            <span className="dash" aria-hidden="true" />
            <span className="mono text-[10.5px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
              {eyebrow}
            </span>
          </div>
        ) : null}

        <h2 className="display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-[color:var(--color-ink)]">
          {title}
        </h2>

        {lede ? (
          <p className="mt-4 max-w-[62ch] display text-[17px] leading-[1.55] text-[color:var(--color-muted)]">
            {lede}
          </p>
        ) : null}

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
