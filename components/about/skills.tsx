import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold text-sky-400">Skills</p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={cn(
              i % 1 == 0 &&
                "dark:hover:bg-emerald-950 dark:hover:text-emerald-400 hover:bg-emerald-200 hover:text-emerald-700",
              i % 2 == 0 &&
                "dark:hover:bg-fuchsia-950 dark:hover:text-fuchsia-400 hover:bg-fuchsia-200 hover:text-fuchsia-700",
              i % 3 == 0 &&
                "dark:hover:bg-orange-950 dark:hover:text-orange-400 hover:bg-orange-200 hover:text-orange-700",
              i % 5 == 0 &&
                "dark:hover:bg-sky-950 dark:hover:text-sky-400 hover:bg-sky-200 hover:text-sky-700",
              "flex items-center gap-2 duration-500 bg-secondary font-medium text-sm text-muted-foreground px-4 py-2 rounded-md",
            )}
          >
            {skill.icon}
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
