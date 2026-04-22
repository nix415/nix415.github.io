export type Project = {
  name: string;
  description: string;
  imgSrc: string;
  link: string;
  linkText?: string;
  secondaryLink?: { href: string; label: string };
  index?: string;
  category?: string;
  /** Editorial one-line stat strip rendered under the title. */
  stats?: string[];
  /** Marks the lead project so the layout can give it more real-estate. */
  featured?: boolean;
};

function previewFor(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/800/${url}`;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    category: "Analytics · SQL",
    name: "SQL Marketing Portfolio",
    description:
      "Five SQL analyses on Kaggle's Customer Segmentation Data — acquisition, funnel, cohort retention, revenue ROI, and RFM segmentation. The questions a growth team asks every week.",
    imgSrc: previewFor("sql-marketing-portfolio-site.vercel.app"),
    link: "https://sql-marketing-portfolio-site.vercel.app",
    linkText: "Open project",
    secondaryLink: {
      href: "https://github.com/nix415/sql-marketing-portfolio-site",
      label: "Source",
    },
    stats: ["1,000-customer dataset", "5 SQL analyses", "17 queries"],
    featured: true,
  },
  {
    index: "02",
    category: "Product · Audience",
    name: "Asian News Aggregator",
    description:
      "Pulls 15+ AAPI news sources and uses Reddit and AI signals to surface what audiences care about — built around audience targeting and content strategy.",
    imgSrc: "/images/asian-news-aggregator.jpg",
    link: "https://asian-news-aggregator-git-main-nixontse1-2085s-projects.vercel.app",
    linkText: "Visit site",
    secondaryLink: {
      href: "https://github.com/nix415/asian-news-aggregator",
      label: "Source",
    },
    stats: ["15+ sources", "Reddit + AI ranking", "Built during internship"],
  },
  {
    index: "03",
    category: "AMA · Marketing Report",
    name: "Kyle's Kitchen Marketing Report",
    description:
      "Collegiate marketing report for Kyle's Kitchen — positioning, audience research, and a campaign roadmap built for the American Marketing Association at UCSB.",
    imgSrc: "/images/kyles-kitchen-cover.png",
    link: "/pdfs/kyles-kitchen-marketing-report-2026.pdf",
    linkText: "Read report",
  },
  {
    index: "04",
    category: "AMA · Case Competition",
    name: "UCSB × MLB Case Competition",
    description:
      "National MLB marketing case deck covering audience segmentation, fan engagement strategy, and growth opportunities for a younger demographic.",
    imgSrc: "/images/ucsb-mlb-cover.png",
    link: "/pdfs/ucsb-mlb-case-competition.pdf",
    linkText: "View deck",
  },
];
