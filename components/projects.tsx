import { projects } from "@/data/projects";
import { ProjectCard } from "./projects-card";
import { uuid } from "uuidv4";
import { Separator } from "./ui/separator";

export function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold text-2xl font-heading">Projects</h2>
        <p className="text-muted-foreground font-medium text-sm">
          All my shipped projects.
        </p>
      </div>
      {projects.map((project) => (
        <ProjectCard project={project} key={uuid()} />
      ))}
      <Separator/>
    </div>
  );
}
