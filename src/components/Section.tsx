import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 scroll-mt-24 reveal ${inView ? "is-visible" : ""}`}
    >
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2
            className="display text-3xl md:text-4xl stagger-item"
            style={{ ["--stagger-delay" as never]: "0ms" } as CSSProperties}
          >
            {title}
          </h2>
        </div>
        <div
          className="md:col-span-8 stagger-item"
          style={{ ["--stagger-delay" as never]: "120ms" } as CSSProperties}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
