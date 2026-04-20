import type { ReactNode } from "react";

type Props = {
  id?: string;
  number: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, number, title, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 border-t border-[color:var(--color-line)]">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.3em] uppercase text-[color:var(--color-muted)]">
            {number}
          </p>
          <h2 className="serif text-4xl md:text-5xl mt-3">{title}</h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
