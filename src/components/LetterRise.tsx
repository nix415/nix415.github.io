import type { CSSProperties } from "react";

type Props = {
  text: string;
  /** Delay applied to the first letter, in ms. Subsequent letters stagger. */
  baseDelay?: number;
  /** Per-letter stagger in ms. */
  step?: number;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "div";
  ariaLabel?: string;
};

/**
 * Splits a string into per-character spans that each fade in and rise from
 * 0.45em on mount. Keeps whitespace intact so line-height stays correct.
 * The animation itself lives in index.css (`.letter` + `letter-rise`).
 */
export default function LetterRise({
  text,
  baseDelay = 0,
  step = 55,
  className,
  as: Tag = "span",
  ariaLabel,
}: Props) {
  return (
    <Tag
      className={className}
      aria-label={ariaLabel ?? text}
      style={{ ["--base-delay" as never]: `${baseDelay}ms` } as CSSProperties}
    >
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="letter"
          style={{ ["--i" as never]: i, animationDelay: `${baseDelay + i * step}ms` } as CSSProperties}
        >
          {ch}
        </span>
      ))}
    </Tag>
  );
}
