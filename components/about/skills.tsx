import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <div className="flex flex-col gap-8">
    <p className="text-3xl font-bold text-sky-400">Skills</p>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <div
          className={cn(
            i % 1 == 0 && "hover:bg-emerald-950 hover:text-emerald-400",
            i % 2 == 0 && "hover:bg-fuchsia-950 hover:text-fuchsia-400",
            i % 3 == 0 && "hover:bg-orange-950 hover:text-orange-400",
            i % 5 == 0 && "hover:bg-sky-950 hover:text-sky-400",
            "flex items-center gap-2 duration-500 bg-secondary font-medium text-sm text-muted-foreground px-4 py-2 rounded-md"
          )}
        >
          {skill.icon}
          {skill.name}
        </div>
      ))}
    </div>
  </div>
  )
}