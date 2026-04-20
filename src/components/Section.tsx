import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="serif text-4xl md:text-5xl">{title}</h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
