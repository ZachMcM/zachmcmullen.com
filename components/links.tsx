import { links } from "@/config/links";
import { Separator } from "./ui/separator";
import { uuid } from "uuidv4";
import Link from "next/link";
import { Button } from "./ui/button";
import { TwitterIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const linkArr = Object.keys(links) as (keyof typeof links)[];

export function Links() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold text-2xl font-heading">Links</h2>
        <p className="text-muted-foreground font-medium text-sm">
          Get in touch with me.
        </p>
      </div>
      {linkArr.map((link) => (
        <Link href={link} key={uuid()}>
          <Button variant="link" className="px-0">
            {link == "twitter" && <TwitterIcon className="h-4 w-4 mr-2" />}
            {link == "github" && <GitHubLogoIcon className="h-4 w-4 mr-2" />}
            {link == "linkedin" && <LinkedInLogoIcon className="h-4 w-4 mr-2" />}
            {links[link]}
          </Button>
        </Link>
      ))}
      <Separator />
    </div>
  );
}
