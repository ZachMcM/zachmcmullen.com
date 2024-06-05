"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Links } from "./links";
import { useState } from "react";

export function MobileNav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" className="!text-sky-400" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Link href="/about">
              <Button
                variant={pathname == "/about" ? "secondary" : "ghost"}
                className={cn(
                  "text-base text-muted-foreground font-semibold hover:text-fuchsia-400",
                  pathname == "/about" && "text-fuchsia-400",
                )}
                onClick={() => setOpen(false)}
              >
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant={pathname == "/projects" ? "secondary" : "ghost"}
                className={cn(
                  "text-base text-muted-foreground font-semibold hover:text-emerald-400",
                  pathname == "/projects" && "text-emerald-400",
                )}
                onClick={() => setOpen(false)}
              >
                Projects
              </Button>
            </Link>
          </div>
          <Links />
        </div>
      </SheetContent>
    </Sheet>
  );
}
