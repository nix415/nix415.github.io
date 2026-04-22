import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  index?: string;
  category?: string;
  stats?: string[];
  secondaryLink?: { href: string; label: string };
}

const ProjectCard = React.forwardRef<HTMLElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = "Open project",
      index,
      category,
      stats,
      secondaryLink,
      ...props
    },
    ref,
  ) => {
    return (
      <article
        ref={ref}
        className={cn(
          "group relative flex flex-col",
          className,
        )}
        {...props}
      >
        <a
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`${title} — ${linkText}`}
          className="block press"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[color:var(--color-surface)] border border-[color:var(--color-line)]">
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </a>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {index ? (
              <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                {index}
              </span>
            ) : null}
            {category ? (
              <span className="mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-muted)]">
                {category}
              </span>
            ) : null}
          </div>
        </div>

        <h3 className="mt-2 display text-[clamp(1.25rem,2vw,1.625rem)] leading-[1.1] tracking-[-0.01em] text-[color:var(--color-ink)]">
          <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="link-ink"
          >
            {title}
          </a>
        </h3>

        {stats && stats.length > 0 ? (
          <div className="mt-3 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
            {stats.join(" · ")}
          </div>
        ) : null}

        <p className="mt-4 text-[13px] leading-[1.55] text-[color:var(--color-muted)] max-w-[58ch] line-clamp-2">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-5">
          <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group/link press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">{linkText}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          {secondaryLink ? (
            <a
              href={secondaryLink.href}
              target={secondaryLink.href.startsWith("http") ? "_blank" : undefined}
              rel={secondaryLink.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group/link2 press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              <span className="link-ink">{secondaryLink.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link2:translate-x-0.5 group-hover/link2:-translate-y-0.5" />
            </a>
          ) : null}
        </div>
      </article>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
export default ProjectCard;
