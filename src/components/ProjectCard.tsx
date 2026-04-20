import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.repoUrl;

  const Inner = (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-full aspect-[4/3] flex items-end justify-center pb-2">
        {/* Hover preview */}
        {project.previewImage && (
          <div
            className="
              absolute inset-x-0 -top-2 mx-auto w-[88%] aspect-[16/10]
              rounded-xl overflow-hidden border border-[color:var(--color-line)]
              bg-[color:var(--color-surface)] shadow-lg
              opacity-0 -translate-y-1 scale-95
              group-hover:opacity-100 group-hover:-translate-y-3 group-hover:scale-100
              transition-all duration-300 ease-out
              pointer-events-none
            "
          >
            <img
              src={project.previewImage}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Folder icon — sits below the preview */}
        <FolderIcon className="w-40 h-32 transition-transform duration-300 ease-out group-hover:translate-y-1" />
      </div>

      <h3 className="serif text-2xl mt-4">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)] max-w-sm">
        {project.description}
      </p>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.liveUrl && (
            <span className="font-medium text-[color:var(--color-accent)]">
              Live site →
            </span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
            >
              Source ↗
            </a>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Open ${project.name}`}
      >
        {Inner}
      </a>
    );
  }
  return Inner;
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Folder"
    >
      <defs>
        <linearGradient id="folderBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7DB7E8" />
          <stop offset="100%" stopColor="#5B9BD3" />
        </linearGradient>
        <linearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8D2F2" />
          <stop offset="100%" stopColor="#76B0DF" />
        </linearGradient>
        <linearGradient id="tabGloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CC8EE" />
          <stop offset="100%" stopColor="#6FA7D6" />
        </linearGradient>
      </defs>

      {/* Back panel with tab */}
      <path
        d="M14 38 Q14 28 24 28 H78 L92 42 H176 Q186 42 186 52 V134 Q186 144 176 144 H24 Q14 144 14 134 Z"
        fill="url(#folderBack)"
      />
      {/* Tab highlight */}
      <path
        d="M24 30 H78 L90 42 H32 Q24 42 24 50 Z"
        fill="url(#tabGloss)"
        opacity="0.6"
      />

      {/* Front panel (slightly lower so the tab peeks above) */}
      <path
        d="M14 56 Q14 48 24 48 H176 Q186 48 186 56 V134 Q186 144 176 144 H24 Q14 144 14 134 Z"
        fill="url(#folderFront)"
      />

      {/* Subtle inner highlight on the front fold */}
      <path
        d="M14 56 Q14 48 24 48 H176 Q186 48 186 56"
        stroke="#FFFFFF"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}
