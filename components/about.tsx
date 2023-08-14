import { about } from "@/data/about";
import { Separator } from "./ui/separator";

export function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold text-2xl">About</h2>
        <p className="text-muted-foreground font-medium text-sm ">{about}</p>
      </div>
      <Separator/>
    </div>
  );
}
