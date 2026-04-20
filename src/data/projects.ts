export type Project = {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  previewImage?: string;
};

function previewFor(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/800/${url}`;
}

export const PROJECTS: Project[] = [
  {
    name: "Asian News Aggregator",
    description:
      "A content product that pulls from 15+ AAPI news sources and uses signals from Reddit and AI to surface what audiences actually care about — built to practice audience targeting, content strategy, and engagement-driven growth.",
    tags: ["Audience Strategy", "Content", "React", "Python"],
    liveUrl: "https://asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    repoUrl: "https://github.com/nix415/asian-news-aggregator",
    previewImage: previewFor(
      "asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    ),
  },
  {
    name: "SQL Marketing Portfolio",
    description:
      "Five SQL analyses on a customer dataset covering acquisition mix, funnel conversion, cohort retention, revenue ROI, and RFM segmentation — the same questions a growth or lifecycle marketing team asks every week.",
    tags: ["SQL", "Funnel Analysis", "Cohorts", "RFM"],
    liveUrl: "https://nix415.github.io/sql-marketing-portfolio/",
    repoUrl: "https://github.com/nix415/sql-marketing-portfolio",
    previewImage: previewFor("nix415.github.io/sql-marketing-portfolio/"),
  },
];
