import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

/** True for in-app routes (e.g. "/work/ucsb-mlb") that should navigate via
 *  react-router. False for external URLs and static assets like /pdfs/foo.pdf
 *  that need a real anchor request. */
function isInternalRoute(href: string): boolean {
  if (!href.startsWith("/")) return false;
  if (href.startsWith("//")) return false;
  // Anything that points at a real file in /public — let the browser handle it.
  if (/\.[a-zA-Z0-9]{2,5}(\?|#|$)/.test(href)) return false;
  return true;
}

type SmartLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

function SmartLink({ href, className, ariaLabel, children }: SmartLinkProps) {
  if (isInternalRoute(href)) {
    return (
      <Link to={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

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
  imgPosition?: string;
  imgFit?: "cover" | "contain";
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
      imgPosition,
      imgFit = "cover",
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
        <SmartLink
          href={link}
          ariaLabel={`${title} — ${linkText}`}
          className="block press"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[color:var(--color-surface)] border border-[color:var(--color-line)]">
            <img
              src={imgSrc}
              alt={title}
              loading="lazy"
              style={imgPosition ? { objectPosition: imgPosition } : undefined}
              className={cn(
                "h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]",
                imgFit === "contain" ? "object-contain" : "object-cover",
              )}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </SmartLink>

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
          <SmartLink href={link} className="link-ink">
            {title}
          </SmartLink>
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
          <SmartLink
            href={link}
            className="group/link press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]"
          >
            <span className="link-ink">{linkText}</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </SmartLink>
          {secondaryLink ? (
            <SmartLink
              href={secondaryLink.href}
              className="group/link2 press inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              <span className="link-ink">{secondaryLink.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link2:translate-x-0.5 group-hover/link2:-translate-y-0.5" />
            </SmartLink>
          ) : null}
        </div>
      </article>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
export default ProjectCard;
