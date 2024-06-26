import { ProjectCard } from "@/components/projects-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <p className="font-bold text-fuchsia-400 text-3xl">Projects</p>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
}
