export type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Asian News Aggregator",
    description:
      "Full-stack news app focused on AAPI stories. Aggregates RSS, layers in optional NewsAPI / YouTube / Anthropic enrichment, and serves a fast React UI with categories, bookmarks, and an AI-assisted social pitch generator.",
    tags: ["React", "TypeScript", "Vite", "Flask", "Vercel"],
    liveUrl: "https://asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    repoUrl: "https://github.com/nix415/asian-news-aggregator",
  },
  {
    name: "SQL Marketing Portfolio",
    description:
      "Five SQLite analyses that mirror real growth-team workflows: acquisition mix, funnel conversion, cohort retention, revenue and ROI, and RFM segmentation. Each script is documented and ready to run.",
    tags: ["SQL", "SQLite", "Analytics", "Marketing"],
    liveUrl: "https://nix415.github.io/sql-marketing-portfolio/",
    repoUrl: "https://github.com/nix415/sql-marketing-portfolio",
  },
];
