import { SiC, SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Skill = {
  name: string,
  icon: JSX.Element
}

export const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: <SiTypescript/>
  },
  {
    name: "C",
    icon: <SiC/>
  },
  {
    name: "Java",
    icon: <FaJava/>
  },
  {
    name: "JavaScript",
    icon: <SiJavascript/>
  },
  {
    name: "React",
    icon: <SiReact/>
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs/>
  },
  {
    name: "Express.js",
    icon: <SiExpress/>
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs/>
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>
  },
  {
    name: "Prisma",
    icon: <SiPrisma/>
  },
  {
    name: "HTML",
    icon: <SiHtml5/>
  },
  {
    name: "CSS",
    icon: <SiCss3/>
  },
  {
    name: "Git",
    icon: <SiGit/>
  }
]