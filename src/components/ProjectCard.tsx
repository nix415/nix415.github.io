import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 hover:-translate-y-1 transition-transform">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-[color:var(--color-bg)] border border-[color:var(--color-line)] flex items-center justify-center">
          <FolderIcon />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="serif text-2xl leading-tight">{project.name}</h3>
          <p className="mt-2 text-[color:var(--color-muted)] text-sm leading-relaxed">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full border border-[color:var(--color-line)] text-[color:var(--color-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[color:var(--color-accent)] hover:underline"
              >
                Live site →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]"
              >
                Source ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function FolderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h3.4a2 2 0 0 1 1.6.8l1.2 1.6h7.3A2.5 2.5 0 0 1 21.5 9.9v8.6A2.5 2.5 0 0 1 19 21H5a2 2 0 0 1-2-2V7.5Z" />
      <path d="M8 12l1 1 2-2" opacity=".6" />
    </svg>
  );
}
