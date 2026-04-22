export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
  index?: string;
  category?: string;
};

function previewFor(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/800/${url}`;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    category: "Marketing · Case Studies",
    name: "American Marketing Association",
    description:
      "Two collegiate case projects — a Kyle's Kitchen marketing report and a national MLB case deck — covering positioning, audience research, and campaign strategy.",
    imgSrc: "/images/kyles-kitchen-cover.png",
    link: "/pdfs/kyles-kitchen-marketing-report-2026.pdf",
    linkText: "Read report",
    secondaryLink: {
      href: "/pdfs/ucsb-mlb-case-competition.pdf",
      label: "MLB Case Deck",
    },
  },
  {
    index: "02",
    category: "Product · Audience Tech",
    name: "Asian News Aggregator",
    description:
      "Pulls 15+ AAPI news sources and uses Reddit + AI signals to surface what audiences care about — built around audience targeting and content strategy.",
    imgSrc: "/images/asian-news-aggregator.jpg",
    link: "https://asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    linkText: "Visit site",
    secondaryLink: {
      href: "https://github.com/nix415/asian-news-aggregator",
      label: "Source",
    },
  },
  {
    index: "03",
    category: "Analytics · SQL",
    name: "SQL Marketing Portfolio",
    description:
      "Five SQL analyses on customer data — acquisition, funnel, cohort retention, revenue ROI, and RFM segmentation — the questions growth teams ask weekly.",
    imgSrc: previewFor("nix415.github.io/sql-marketing-portfolio/"),
    link: "https://nix415.github.io/sql-marketing-portfolio/",
    linkText: "Open project",
    secondaryLink: {
      href: "https://github.com/nix415/sql-marketing-portfolio",
      label: "Source",
    },
  },
];
