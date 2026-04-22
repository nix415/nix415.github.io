import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  radius?: number;
  strength?: number;
  ariaLabel?: string;
};

/**
 * Subtle magnetic hover: the inner content translates up to `strength` px
 * toward the cursor when it enters `radius` of the element. Uses CSS vars
 * so the transition is driven by the stylesheet, not per-frame JS.
 * Respects prefers-reduced-motion.
 */
export default function MagneticCTA({
  children,
  href,
  onClick,
  className,
  innerClassName,
  radius = 120,
  strength = 6,
  ariaLabel,
}: Props) {
  const rootRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
        return;
      }
      const ratio = 1 - dist / radius;
      el.style.setProperty("--mx", `${(dx / radius) * strength * ratio}px`);
      el.style.setProperty("--my", `${(dy / radius) * strength * ratio}px`);
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, strength]);

  const inner = (
    <span className={`magnetic-inner ${innerClassName ?? ""}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        ref={rootRef}
        href={href}
        aria-label={ariaLabel}
        className={`inline-flex press ${className ?? ""}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={rootRef}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex press ${className ?? ""}`}
    >
      {inner}
    </button>
  );
}
