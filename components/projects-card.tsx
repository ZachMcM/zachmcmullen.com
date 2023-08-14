import { Project } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  CircleIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  Link1Icon,
  Link2Icon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const simplifiedLang = project.language.toLowerCase();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center gap-4">
          <CircleIcon
            className={cn(
              "h-4 w-4 text-zinc-400",
              simplifiedLang == "typescript" && "text-sky-400",
              simplifiedLang == "javascript" && "text-yellow-400"
            )}
          />
          <p className="text-muted-foreground text-sm">{project.language}</p>
          <div className="flex items-center text-muted-foreground">
            <Link href={project.github}>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            {project.site && (
              <Link href={project.site}>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
