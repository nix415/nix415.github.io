export const SITE = {
  name: "Nixon Tse",
  firstName: "Nixon",
  lastName: "Tse",

  nav: ["Work", "About", "Contact"] as const,

  availability: "Available · Spring 2026 · Growth & Marketing Analytics",

  hero: {
    bio: "One of my deepest joys comes from turning customer curiosity into work people actually notice — across growth marketing, marketing analytics, and small digital experiments.",
    roles: ["Growth Marketing", "Marketing Analytics"] as const,
    currently: [
      "Writing SQL analyses for a 1,000-customer dataset",
      "Reading How Brands Grow — Byron Sharp",
      "Building an AAPI news aggregator for Asian Founded",
      "Studying Communication at UC Santa Barbara",
    ],
  },

  /**
   * In-page anchors for the "WHERE YOU CAN START" list in the hero.
   * `icon` names map to lucide-react exports in <Hero>.
   */
  startHere: [
    { icon: "User", label: "Learn what I do", target: "#about" },
    { icon: "FileText", label: "Browse my projects", target: "#work" },
    { icon: "Bookmark", label: "Read my SQL case study", target: "#work" },
    { icon: "Send", label: "Get in touch", target: "#contact" },
  ] as const,

  work: {
    title: "Selected Work",
    eyebrow: "Work",
    lede: "Three pieces of work, chosen because they each look at growth from a different angle.",
  },

  about: {
    title: "About",
    eyebrow: "About",
    body: "I'm focused on growth marketing and marketing analytics, where I get to mix curiosity about people with a love for data. I dig into customer behavior, build dashboards and SQL analyses that drive decisions, and ship small web projects that put those insights to work.",
    closing:
      "Looking for a team where I can help brands understand their audience, sharpen their funnel, and grow with intention.",
  },

  tools: {
    title: "Tools & Subjects",
    eyebrow: "Tools",
    items: [
      "SQL",
      "Python",
      "Tableau",
      "Google Analytics",
      "A/B Testing",
      "HubSpot",
      "Meta Ads",
      "Audience Research",
      "React",
      "Excel",
    ] as const,
  },

  contact: {
    title: "Let's talk.",
    eyebrow: "Contact",
    lede: "The best places to reach me.",
    email: "nixontse1@gmail.com",
    github: "https://github.com/nix415",
    linkedin: "https://www.linkedin.com/in/nixontse/",
    resumeHref: "/resume.pdf",
  },

  footer: {
    updated: "Last updated — Apr 2026",
  },
} as const;

export type StartHereItem = (typeof SITE.startHere)[number];
