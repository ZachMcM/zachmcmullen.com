"use client";

import { Song } from "@/lib/spotify";
import { useQuery } from "@tanstack/react-query";
import { Music } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function NowPlaying() {
  const {
    data: nowPlaying,
    isFetching,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["now-playing"],
    queryFn: async (): Promise<Song> => {
      const res = await fetch(process.env.NEXT_PUBLIC_SPOTIFY_API!);
      if (!res.ok) {
        throw new Error("No song playing currently");
      }
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl font-bold text-emerald-400">Now Playing</p>
      <div className="flex w-full">
        {isFetching || isPending ? (
          <Skeleton className="h-44 w-full" />
        ) : isError ? (
          <div className="border rounded-md flex flex-col justify-center items-center w-60 gap-6 p-6">
            <Music className="h-16 w-16 text-muted-foreground" />
            <p className="font-medium text-muted-foreground">No song playing</p>
          </div>
        ) : (
          nowPlaying && (
            <Card className="w-full flex gap-8 items-center p-6">
              <div className="bg-muted h-32 w-32 relative rounded-lg">
                <Image
                  fill
                  className="rounded-lg object-cover"
                  src={nowPlaying.albumImageUrl}
                  alt={nowPlaying.album}
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
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
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-1.5 bg-secondary rounded-full animate-pulse" />
                  <div className="h-2.5 w-1.5 bg-secondary rounded-full animate-pulse delay-500" />
                  <div className="h-2.5 w-1.5 bg-secondary rounded-full animate-pulse delay-1000" />
                  <div className="h-2.5 w-1.5 bg-secondary rounded-full animate-pulse delay-1500" />
                  <div className="h-2.5 w-1.5 bg-secondary rounded-full animate-pulse delay-2000" />
                </div>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
}
