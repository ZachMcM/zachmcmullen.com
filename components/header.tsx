import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { links } from "@/config/links";
import { ThemeButton } from "./theme-btn";

export function Header() {
  return (
    <div className="w-full flex flex-col gap-4">
      <header className="flex items-center gap-4 justify-between w-full">
        <div className="flex flex-col">
          <p className="font-semibold text-lg">zach mcmullen</p>
          <p className="text-muted-foreground">Entrepreneur. Engineer. Student.</p>
        </div>
        <div className="flex items-center">
          <Link href={links.twitter}>
            <Button variant="ghost" size="icon"><TwitterLogoIcon className="h-4 w-4"/></Button>
          </Link>
          <Link href={links.github}>
            <Button variant="ghost" size="icon"><GitHubLogoIcon className="h-4 w-4"/></Button>
          </Link>
          <ThemeButton/>
        </div>  
      </header>
      <Separator className="w-full" />
    </div>
  );
}
