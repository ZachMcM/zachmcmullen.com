"use client";

import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeButton } from "./theme-btn";
import { Button } from "./ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full flex top-0 sticky z-50 backdrop-blur-lg">
      <div className="flex w-full justify-center items-center">
        <header className="border rounded-xl w-full max-w-2xl mx-6 my-4 py-1 backdrop-blur-lg bg-background/20">
          <div className="flex items-center justify-between p-2 px-3">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-base font-semibold !text-sky-400"
              >
                <Terminal className="mr-2" />
                Zach McMullen
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/about">
                  <Button
                    variant={pathname == "/about" ? "secondary" : "ghost"}
                    className={cn(
                      "text-base text-muted-foreground font-semibold hover:text-orange-400",
                      pathname == "/about" && "text-orange-400"
                    )}
                  >
                    About
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant={pathname == "/projects" ? "secondary" : "ghost"}
                    className={cn(
                      "text-base text-muted-foreground font-semibold hover:text-fuchsia-400",
                      pathname == "/projects" && "text-fuchsia-400"
                    )}
                  >
                    Projects
                  </Button>
                </Link>
              </div>
              <ThemeButton />
              <MobileNav/>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
