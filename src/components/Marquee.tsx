import { SITE } from "../data/site";

/**
 * Infinite horizontal marquee of role words. Pauses on hover.
 * Two copies of the list are rendered so the loop is seamless.
 */
export default function Marquee() {
  const roles = SITE.marqueeRoles;
  return (
    <div
      className="marquee-wrap relative overflow-hidden border-y border-[color:var(--color-line)] bg-[color:var(--color-bg)] py-4"
      aria-hidden="true"
    >
      <div className="marquee">
        {[...roles, ...roles].map((r, i) => (
          <span
            key={`${r}-${i}`}
            className="display text-3xl md:text-4xl leading-none text-[color:var(--color-ink)]"
          >
            {r}
            <span className="mx-6 text-[color:var(--color-accent)] display-italic">
              &amp;
            </span>
          </span>
        ))}
      </div>
      {/* Fade edges so words slip in/out of the page */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{
          background:
            "linear-gradient(to left, var(--color-bg) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
