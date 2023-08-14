export type Project = {
  title: string,
  description: string,
  github: string,
  site?: string,
  language: string
}

export const projects: Project[] = [
  {
    title: "Studium AI",
    description: `We harnesses the power of artificial intelligence
    to help improve students' critical thinking skills with AI, 
    rather than replace those skills.`,
    github: "https://github.com/ZachMcM/studium-ai",
    site: "https://studiumai.app",
    language: "TypeScript"
  },
  {
    title: "Attack on Titan API",
    description: `A RESTful API that allows you to retrieve information about characters, 
    episodes, locations, organizations, and titans from the popular anime and manga series Attack on Titan.`,
    github: "https://github.com/ZachMcM/attack-on-titan-api",
    site: "https://attackontitanapi.com",
    language: "Typescript"
  },
  {
    title: "Darth Vorlde",
    description: "A Star Wars Wordle inspired guessing game where players attempt to guess a mystery Star Wars Character.",
    github: "https://github.com/ZachMcM/DarthVordle",
    site: "https://darthvordle.com",
    language: "JavaScript"
  },
  {
    title: "Riemann Sum Calculator",
    description: "A typesafe utility class for calculating riemann sums in the NodeJS enviorment.",
    github: "https://github.com/ZachMcM/riemann-sum-calculator",
    site: "https://simple-integral-calculator.vercel.app/",
    language: "TypeScript"
  }
];
