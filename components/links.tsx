import { links } from "@/config/links";
import { Button } from "./ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function Links({ size }: { size?: "sm" | "lg" }) {
  if (!size) size = "sm"

  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <a href={links.github}>
        <Button
          variant="ghost"
          className={cn("hover:bg-fuchsia-950 hover:text-fuchsia-400", size == "sm" && "h-9 w-9")}
          size="icon"
        >
          <GitHubLogoIcon className={cn(size == "sm" ? "h-4 w-4" : "h-5 w-5")} />
        </Button>
      </a>
      <a href={links.twitter}>
        <Button
          variant="ghost"
          className={cn("hover:bg-orange-950 hover:text-orange-400", size == "sm" && "h-9 w-9")}
          size="icon"
        >
          <Twitter className={cn(size == "sm" ? "h-4 w-4" : "h-5 w-5")} />
        </Button>
      </a>
      <a href={links.linkedin}>
        <Button
          variant="ghost"
          className={cn("hover:bg-emerald-950 hover:text-emerald-400", size == "sm" && "h-9 w-9")}
          size="icon"
        >
          <LinkedInLogoIcon className={cn(size == "sm" ? "h-4 w-4" : "h-5 w-5")} />
        </Button>
      </a>
    </div>
  );
}
