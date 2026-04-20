export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
};

function previewFor(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/800/${url}`;
}

export const PROJECTS: Project[] = [
  {
    name: "American Marketing Association",
    description:
      "Two collegiate marketing case projects: a full marketing report for Kyle's Kitchen and a national MLB case competition deck. Covers brand positioning, target-audience research, channel strategy, and campaign recommendations.",
    imgSrc: "/images/kyles-kitchen-cover.png",
    link: "/pdfs/kyles-kitchen-marketing-report-2026.pdf",
    linkText: "View Marketing Report",
    secondaryLink: {
      href: "/pdfs/ucsb-mlb-case-competition.pdf",
      label: "UCSB MLB Case Comp",
    },
  },
  {
    name: "Asian News Aggregator",
    description:
      "A content product that pulls from 15+ AAPI news sources and uses signals from Reddit and AI to surface what audiences actually care about — built to practice audience targeting, content strategy, and engagement-driven growth.",
    imgSrc: "/images/asian-news-aggregator.jpg",
    link: "https://asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    linkText: "View Live Site",
    secondaryLink: {
      href: "https://github.com/nix415/asian-news-aggregator",
      label: "Source",
    },
  },
  {
    name: "SQL Marketing Portfolio",
    description:
      "Five SQL analyses on a customer dataset covering acquisition mix, funnel conversion, cohort retention, revenue ROI, and RFM segmentation — the same questions a growth or lifecycle marketing team asks every week.",
    imgSrc: previewFor("nix415.github.io/sql-marketing-portfolio/"),
    link: "https://nix415.github.io/sql-marketing-portfolio/",
    linkText: "View Project",
    secondaryLink: {
      href: "https://github.com/nix415/sql-marketing-portfolio",
      label: "Source",
    },
  },
];
