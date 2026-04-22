import type { CSSProperties } from "react";
import { SITE } from "../data/site";

/**
 * Editorial "contents" strip — a dotted list of skills rendered in
 * uppercase mono so it reads like a table-of-contents footer.
 */
export default function Skills() {
  return (
    <div className="mt-10 pt-6 border-t border-[color:var(--color-line)]">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-3">
        Tools &amp; Subjects
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {SITE.skills.map((skill, i) => (
          <li
            key={skill}
            className="stagger-item mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink)] flex items-center gap-2"
            style={{ "--stagger-delay": `${320 + i * 40}ms` } as CSSProperties}
          >
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
