"use client";

import { Song } from "@/lib/spotify";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export function NowPlaying() {
  const {
    data: nowPlaying,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ["now-playing"],
    queryFn: async (): Promise<Song> => {
      const res = await fetch("/api/now-playing");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold text-emerald-400">Now Playing</p>
      <div className="flex justify-center lg:justify-start">
        {isFetching || isPending ? (
          <Skeleton className=" h-64 w-64" />
        ) : (
          nowPlaying && (
            <div className="border w-max rounded-md flex justify-center p-6">
              <div className="flex flex-col items-center gap-8">
                <div className="bg-muted h-32 w-32 relative rounded-lg">
                  <Image
                    fill
                    className="rounded-lg object-cover"
                    src={nowPlaying.albumImageUrl}
                    alt={nowPlaying.album}
                  />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <a
                    href={nowPlaying.url}
                    className="hover:underline underline-offset-4 font-medium"
                  >
                    {nowPlaying.name}
                  </a>
                  <p className="text-muted-foreground text-sm">
                    {nowPlaying.artists.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
