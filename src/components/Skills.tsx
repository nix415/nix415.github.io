import { SITE } from "../data/site";

export default function Skills() {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {SITE.skills.map((skill) => (
        <li
          key={skill}
          className="px-3 py-1.5 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-xs text-[color:var(--color-ink)]"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
