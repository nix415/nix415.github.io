import type { CSSProperties } from "react";
import { SITE } from "../data/site";

export default function Skills() {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {SITE.skills.map((skill, i) => (
        <li
          key={skill}
          className="stagger-item px-3 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-xs text-[color:var(--color-ink)]"
          style={{ "--stagger-delay": `${i * 50}ms` } as CSSProperties}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
