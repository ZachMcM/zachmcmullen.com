import { Links } from "@/components/links";
import { ProjectCard } from "@/components/projects-card";
import { TypewriterWrapper } from "@/components/typewriter-wrapper";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { snippets } from "@/data/snippets";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <TypewriterWrapper />
          <p className="font-bold text-3xl">
            I'm <span className="text-sky-400">Zach McMullen</span>
          </p>
        </div>
        {snippets.map((snippet, i) => (
          <p
            key={i}
            className="text-muted-foreground font-medium tracking-wide"
          >
            {snippet}
          </p>
        ))}
        <Links size="lg" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold text-fuchsia-400 text-2xl">
            Featured Projects
          </p>
          <Link href="/projects">
            <Button className="dark:bg-emerald-950 bg-emerald-200 text-emerald-700 hover:bg-emerald-200/80 dark:text-emerald-400 dark:hover:bg-emerald-950/80">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        {projects
          .filter((project) => project.featured)
          .map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
      </div>
    </div>
  );
}
