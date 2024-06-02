import { Project } from "@/data/projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="backdrop-blur-2xl bg-transparent">
      <CardHeader>
        <CardTitle className="text-xl lowercase">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <p className="px-3 py-2 font-medium text-xs dark:bg-sky-950 bg-sky-200 text-sky-700 rounded-md dark:text-sky-400">
                #{tag.toLowerCase()}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p className="font-medium text-muted-foreground text-sm">{project.language}</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Link href={project.github}>
                <Button
                  variant="ghost"
                  className="dark:hover:bg-orange-950 hover:bg-orange-200 hover:text-orange-700 dark:hover:text-orange-400 h-9 w-9"
                  size="icon"
                >
                  <GitHubLogoIcon className="h-[20px] w-[20px]" />
                </Button>
              </Link>
              {project.site && (
                <Link href={project.site}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="dark:hover:bg-fuchsia-950 hover:bg-fuchsia-200 hover:text-fuchsia-700 dark:hover:text-fuchsia-400 h-9 w-9"
                  >
                    <ExternalLink className="h-[20px] w-[20px]" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
