import { experiences, resumeLink } from "@/data/about";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
    <div className="flex items-center justify-between">
      <p className="text-3xl font-bold text-fuchsia-400">Experience</p>
      <a href={resumeLink}>
        {" "}
        <Button className="bg-orange-950 hover:bg-orange-950/80 text-orange-400 duration-500">
          Resume <Download className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
    <div className="flex flex-col gap-20 relative">
      {experiences.map((exp, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className=" h-16 w-16 relative">
            <Image
              src={`/images/${exp.image}`}
              className="object-cover rounded-lg"
              alt={exp.name}
              fill
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-muted-foreground">
              {exp.timeline}
            </p>
            <p className="font-medium">{exp.name}</p>
            <p className="font-medium text-sm text-muted-foreground">
              {exp.title}
            </p>
          </div>
        </div>
      ))}
      <Separator orientation="vertical" className="absolute left-8 -z-10"/>
    </div>
  </div>
  )
}