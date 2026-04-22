import {
  BarChart3,
  Code2,
  Layers,
  Megaphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "../data/site";

const ICONS: Record<string, LucideIcon> = {
  BarChart3,
  TrendingUp,
  Megaphone,
  Code2,
  Layers,
};

/**
 * Skills section — mirrors the reference UI: a 2x2 grid of category cards,
 * each with a lucide icon, a bold title, and a short paragraph — followed
 * by an "All Capabilities" chip strip summarising tools and tactics.
 */
export default function Skills() {
  return (
    <div className="space-y-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        {SITE.skills.categories.map((cat) => {
          const Icon = ICONS[cat.icon] ?? Layers;
          return (
            <div key={cat.name} className="flex items-start gap-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="display text-[18px] font-medium tracking-[-0.01em] text-[color:var(--color-ink)]">
                  {cat.name}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)] max-w-[46ch]">
                  {cat.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="display text-[16px] font-medium tracking-[-0.01em] text-[color:var(--color-ink)]">
          {SITE.skills.capabilitiesLabel}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SITE.skills.capabilities.map((cap) => (
            <li
              key={cap}
              className="mono text-[11px] tracking-[0.14em] text-[color:var(--color-ink)] border border-[color:var(--color-line)] rounded-md px-2.5 py-1 bg-[color:var(--color-surface)]"
            >
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
