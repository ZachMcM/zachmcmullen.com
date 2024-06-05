import { Experience } from "@/components/about/experience";
import { NowPlaying } from "@/components/about/now-playing";
import { Skills } from "@/components/about/skills";
import { Links } from "@/components/links";
import { about } from "@/data/about";

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-8 w-full">
        <p className="text-3xl font-bold text-orange-400">About</p>
        {about.map((para, i) => (
          <p
            key={i}
            className="text-muted-foreground font-medium tracking-wide"
          >
            {para}
          </p>
        ))}
        <div className="flex flex-col gap-4">
          <p className="font-medium">Connect With Me!</p>
          <p className="font-medium text-muted-foreground">
            Feel free to reach out to me at{" "}
            <a
              className="underline underline-offset-4 text-fuchsia-400 hover:text-fuchsia-400/80 duration-500"
              href="mailto:zachmcmullen04@gmail.com"
            >
              zachmcmullen04@gmail.com
            </a>
            , or on social media here:
          </p>
          <Links size="lg" />
        </div>
      </div>
      <Skills />
      <Experience />
      <NowPlaying />
    </div>
  );
}
