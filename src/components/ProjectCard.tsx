import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
  /** Editorial index number, e.g. "01" */
  index?: string;
  /** Mono category label, e.g. "MARKETING · CASE STUDY" */
  category?: string;
}

const ProjectCard = React.forwardRef<HTMLElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = "Read",
      secondaryLink,
      index,
      category,
      onClick,
      ...props
    },
    ref,
  ) => {
    const openLink = () => {
      window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
      <article
        ref={ref}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented) openLink();
        }}
        className={cn(
          "group relative flex flex-col cursor-pointer press",
          "bg-[color:var(--color-surface)] border border-[color:var(--color-line)]",
          "transition-[transform,box-shadow,background-color] duration-500 ease-out",
          "hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(27,27,27,0.25)]",
          "hover:bg-[color:var(--color-bg)]",
          className,
        )}
        {...props}
      >
        {/* Cover image */}
        <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-bg)] border-b border-[color:var(--color-line)]">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
        </div>

        {/* Text block */}
        <div className="relative p-5 flex-1 flex flex-col">
          {/* Top row — big numeral + category */}
          <div className="flex items-start justify-between mb-4">
            {index && (
              <span className="display-italic text-3xl md:text-4xl leading-none text-[color:var(--color-accent)]">
                {index}
              </span>
            )}
            {category && (
              <span className="mono text-[9px] uppercase tracking-[0.28em] text-[color:var(--color-muted)] text-right">
                {category}
              </span>
            )}
          </div>

          <h3 className="display text-[1.4rem] md:text-[1.55rem] leading-[1.15] tracking-tight transition-colors duration-300 group-hover:text-[color:var(--color-accent)]">
            {title}
          </h3>

          <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--color-muted)] flex-1">
            {description}
          </p>

          {/* Rule + CTAs */}
          <div className="mt-5 pt-4 border-t border-[color:var(--color-line)] flex items-center justify-between gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="link-ink inline-flex items-center gap-1.5 text-[13px] font-medium text-[color:var(--color-ink)]"
            >
              {linkText}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {secondaryLink && (
              <a
                href={secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors"
              >
                {secondaryLink.label} ↗
              </a>
            )}
          </div>
        </div>
      </article>
    );
  },
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
export default ProjectCard;
