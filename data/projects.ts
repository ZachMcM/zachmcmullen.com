export type Project = {
  title: string;
  description: string;
  github: string;
  site?: string;
  language: string;
  featured: boolean;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Purdue Hoops",
    description:
      "A mobile app for Purdue University students involved in pickup basketball.",
    github: "https://github.com/ZachMcM/purdue-hoops",
    site: "https://purdue-hoops.vercel.app",
    language: "TypeScript",
    featured: true,
    tags: ["React Native", "Prisma", "Expo", "NodeJS", "Express"],
  },

  {
    title: "Studium AI",
    description: `We harnesses the power of artificial intelligence
    to help improve students' critical thinking skills with AI, 
    rather than replace those skills.`,
    github: "https://github.com/ZachMcM/studium-ai",
    site: "https://studiumai.app",
    language: "TypeScript",
    featured: true,
    tags: ["React", "Prisma", "Next.js", "TailwindCSS"],
  },
  {
    title: "create-zachmcm-app",
    description:
      "A CLI for generating the boilerplate for an Express.js server using Typescript.",
    github: "https://github.com/ZachMcM/create-zachmcm-app",
    language: "JavaScript",
    featured: true,
    tags: ["Node.js", "Express.js", "CLI"],
  },
  {
    title: "Attack on Titan API",
    description: `A RESTful API that allows you to retrieve information about characters, 
    episodes, locations, organizations, and titans from the popular anime and manga series Attack on Titan.`,
    github: "https://github.com/ZachMcM/attack-on-titan-api",
    site: "https://attackontitanapi.com",
    language: "Typescript",
    featured: true,
    tags: ["Node.js", "Express"],
  },
  {
    title: "Social Clone",
    description: "A modern full stack social media app insipred by instagram.",
    github: "https://github.com/ZachMcM/social-clone",
    site: "https://social-clone.vercel.app/",
    language: "TypeScript",
    featured: false,
    tags: ["React", "Prisma", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Darth Vordle",
    description:
      "A Star Wars Wordle inspired guessing game where players attempt to guess a mystery Star Wars Character.",
    github: "https://github.com/ZachMcM/DarthVordle",
    site: "https://darthvordle.com",
    language: "JavaScript",
    featured: false,
    tags: ["HTML", "CSS"],
  },
  {
    title: "Riemann Sum Calculator",
    description:
      "A type safe utility class for calculating riemann sums in the NodeJS enviorment.",
    github: "https://github.com/ZachMcM/riemann-sum-calculator",
    site: "https://simple-integral-calculator.vercel.app/",
    language: "TypeScript",
    featured: false,
    tags: ["Node.js"],
  },
];
