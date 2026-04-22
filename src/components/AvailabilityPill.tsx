type Props = {
  text: string;
  className?: string;
};

/**
 * Small availability indicator — pulsing green dot plus a mono label.
 * Sits at the top of the hero to give recruiters immediate context.
 */
export default function AvailabilityPill({ text, className }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-1.5 ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="relative inline-flex h-2 w-2"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 dot-pulse" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
        {text}
      </span>
    </span>
  );
}
