import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = "View Project",
      secondaryLink,
      onClick,
      ...props
    },
    ref,
  ) => {
    const openLink = () => {
      window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
      <div
        ref={ref}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented) openLink();
        }}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-xl press",
          "border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-sm",
          "transition-[transform,box-shadow] duration-500 ease-in-out hover:-translate-y-1 hover:shadow-md",
          className,
        )}
        {...props}
      >
        <div className="aspect-video overflow-hidden bg-[color:var(--color-bg)]">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="display text-base leading-snug transition-colors duration-300 group-hover:text-[color:var(--color-accent)]">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[color:var(--color-muted)]">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/button press inline-flex items-center gap-1.5 font-medium text-[color:var(--color-accent)] transition-all duration-300 hover:underline"
            >
              {linkText}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-1" />
            </a>
            {secondaryLink && (
              <a
                href={secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
              >
                {secondaryLink.label} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    );
  },
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
export default ProjectCard;
