export const SITE = {
  name: "Nixon Tse",
  nav: ["Home", "Projects", "Contact"] as const,
  hero: {
    headline:
      "Building thoughtful products at the intersection of full-stack development, data, and culture.",
    imageUrl: "",
  },
  intro: {
    title: "Introduction",
    body: "Hey, I'm Nixon — a developer and analyst who likes building things that connect people and surface insights. I work across the stack, from React and TypeScript on the frontend to Python APIs and SQL-driven analyses on the back, with a focus on projects where design, data, and storytelling come together. I'm always exploring what to build next.",
  },
  projectsSection: {
    title: "Projects",
    intro: "A selection of recent work. Click any card for the live site or source.",
  },
  contact: {
    title: "Contact",
    intro: "Open to internships, full-time roles, and collaborations.",
    email: "nixontse1@gmail.com",
    github: "https://github.com/nix415",
    linkedin: "https://www.linkedin.com/in/nixontse/",
  },
} as const;
