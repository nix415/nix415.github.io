import { SITE } from "../data/site";

/**
 * Small editorial "currently" column that cycles through a few
 * rotating items — Writing, Reading, Building, Studying — like
 * the sidebar of a zine. Items all occupy the same grid cell and
 * fade in/out on a shared animation; delays offset each one.
 */
export default function Currently() {
  const items = SITE.currently;
  const perItem = 10; // seconds in the swap loop, must match CSS

  return (
    <aside className="border-l border-[color:var(--color-line)] pl-4 md:pl-5 max-w-xs">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)] mb-2">
        Currently
      </div>
      <div className="grid text-sm leading-snug">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="ticker-item"
            style={{
              animationDelay: `${(i * perItem) / items.length}s`,
              animationDuration: `${perItem}s`,
            }}
          >
            <span className="display-italic text-[color:var(--color-accent)] mr-1">
              {it.label}
            </span>
            <span className="text-[color:var(--color-ink)]">{it.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
