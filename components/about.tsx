import { about } from "@/data/about";
import { Separator } from "./ui/separator";

export function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold text-2xl underline">About</h2>
        <p className="text-muted-foreground leading-6">{about}</p>
      </div>
      <Separator />
    </div>
  );
}
