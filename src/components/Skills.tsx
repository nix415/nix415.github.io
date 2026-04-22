import { SITE } from "../data/site";

/**
 * Single mono row of skills, separated by a middle dot. Wraps gracefully on
 * narrow viewports. The container uses stagger-item via CSS, but the inline
 * list itself is intentionally calm — no chips, no hover.
 */
export default function Skills() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {SITE.tools.items.map((item, i) => (
        <span
          key={item}
          className="mono text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
        >
          {item}
          {i < SITE.tools.items.length - 1 ? (
            <span className="mx-3 text-[color:var(--color-muted)]" aria-hidden="true">
              ·
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
