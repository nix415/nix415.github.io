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
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl",
          "border border-[color:var(--color-line)] bg-[color:var(--color-surface)] shadow-sm",
          "transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
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

        <div className="flex flex-1 flex-col p-6">
          <h3 className="serif text-2xl leading-tight transition-colors duration-300 group-hover:text-[color:var(--color-accent)]">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/button inline-flex items-center gap-2 font-medium text-[color:var(--color-accent)] transition-all duration-300 hover:underline"
            >
              {linkText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
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
