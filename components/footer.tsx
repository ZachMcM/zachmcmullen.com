import Link from "next/link";
import { Links } from "./links";
import { Separator } from "./ui/separator";
import { snippets } from "@/data/snippets";
import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-full py-16 max-w-2xl mx-auto md:px-0 px-8">
      <Separator />
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
        <div className="flex flex-col gap-2">
          {" "}
          <p className="font-medium text-sky-400 text-sm flex items-center gap-2">
            <Terminal className="h-4 w-4" /> Zach McMullen
          </p>
          <p className="text-xs font-medium text-muted-foreground max-w-sm">
            {snippets[0]}
          </p>
          <Links />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-2 gap-4 w-max">
          <Link
            href="/"
            className="text-xs font-medium text-muted-foreground underline underline-offset-4 duration-500 hover:text-fuchsia-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-xs font-medium text-muted-foreground underline underline-offset-4 duration-500 hover:text-orange-400"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-xs font-medium text-muted-foreground underline underline-offset-4 duration-500 hover:text-emerald-400"
          >
            Projects
          </Link>
        </div>
      </div>
    </footer>
  );
}
