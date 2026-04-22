export const SITE = {
  name: "Nixon Tse",
  nav: ["Home", "Projects", "Contact"] as const,

  issue: {
    number: "No. 01",
    edition: "Spring 2026",
    subject: "Growth & Marketing Analytics",
  },

  hero: {
    // Pulled apart into plain words so the headline can be split-animated.
    headlineWords: [
      "A",
      "small",
      "zine",
      "on",
      "turning",
      "data",
      "into",
      "growth,",
      "and",
      "curiosity",
      "into",
      "work",
      "people",
      "actually",
      "notice.",
    ],
    // The words that get the mustard marker.
    markerPhrase: "data into growth",
    standfirst:
      "I'm Nixon — I mix a love for people with a love for data, across growth marketing, marketing analytics, and small digital experiments.",
  },

  // Infinite marquee under the hero
  marqueeRoles: [
    "Growth",
    "Marketing",
    "Analytics",
    "Audience",
    "Content",
    "Funnels",
    "Cohorts",
    "Brand",
    "Experiments",
  ],

  // Rotating "currently" ticker
  currently: [
    { label: "Writing", value: "SQL analyses for a mock customer dataset" },
    { label: "Reading", value: "Marketing @ Scale — Byron Sharp" },
    { label: "Building", value: "An AAPI news aggregator (Asian Founded)" },
    { label: "Studying", value: "UCSB · B.A. Communication" },
  ],

  intro: {
    title: "Introduction",
    eyebrow: "Who",
    body: "I'm focused on growth marketing and marketing analytics, where I get to mix curiosity about people with a love for data. I enjoy digging into customer behavior, building dashboards and SQL analyses that drive real decisions, and shipping web projects that put those insights to work.",
    closing:
      "I want to join a team where I can help brands understand their audience, sharpen their funnel, and grow with intention.",
  },

  skills: [
    "SQL",
    "Python",
    "Tableau",
    "Excel",
    "Google Analytics",
    "A/B Testing",
    "HubSpot",
    "Meta Ads",
    "Audience Research",
    "React",
  ],

  projectsSection: {
    title: "Projects",
    eyebrow: "What",
    lede: "Three pieces of work, chosen because they each look at growth from a different angle.",
  },

  contact: {
    title: "Contact",
    eyebrow: "Where",
    lede: "The best places to reach me.",
    email: "nixontse1@gmail.com",
    github: "https://github.com/nix415",
    linkedin: "https://www.linkedin.com/in/nixontse/",
  },
} as const;
