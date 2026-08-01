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
 * 0.45em on mount. The animation itself lives in index.css (`.letter` +
 * `letter-rise`).
 *
 * Characters are grouped into `.letter-word` wrappers so lines only break at
 * spaces. Without the grouping, every character is its own inline-block and
 * narrow viewports break headings mid-word.
 */
export default function LetterRise({
  text,
  baseDelay = 0,
  step = 55,
  className,
  as: Tag = "span",
  ariaLabel,
}: Props) {
  const words = text.split(" ");

  // Stagger index counts the spaces too, so timing matches the source string.
  let cursor = 0;
  const wordOffsets = words.map((word) => {
    const offset = cursor;
    cursor += word.length + 1;
    return offset;
  });

  return (
    <Tag
      className={className}
      aria-label={ariaLabel ?? text}
      style={{ ["--base-delay" as never]: `${baseDelay}ms` } as CSSProperties}
    >
      {words.map((word, w) => (
        <span key={w}>
          {w > 0 ? " " : null}
          <span className="letter-word">
            {Array.from(word).map((ch, c) => {
              const i = wordOffsets[w] + c;
              return (
                <span
                  key={c}
                  aria-hidden="true"
                  className="letter"
                  style={
                    {
                      ["--i" as never]: i,
                      animationDelay: `${baseDelay + i * step}ms`,
                    } as CSSProperties
                  }
                >
                  {ch}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </Tag>
  );
}
