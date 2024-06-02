import { cn, getTailwindColor } from "@/lib/utils";
import { CircleIcon } from "lucide-react";

export function LanguageIcon({ lang }: { lang: string }) {
  lang = lang.toLowerCase()
  const color = getTailwindColor(lang)

  console.log(color)

  return (
    <p className="text-muted-foreground text-sm font-medium flex items-center capitalize">
    <CircleIcon className={cn(color, "h-6 w-6")} />{" "}
    {lang}
  </p>
  )
}