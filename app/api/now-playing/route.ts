import { getNowPlaying } from "@/lib/spotify"
import { NextResponse } from "next/server"

export async function GET() {
  const nowPlaying = await getNowPlaying()
  return NextResponse.json({
    name: nowPlaying.item.name,
    artists: nowPlaying.item.artists.map((artist: any) => artist.name),
    album: nowPlaying.item.album.name,
    albumImageUrl: nowPlaying.item.album.images[0].url,
    previewUrl: nowPlaying.item.preview_url,
    url: nowPlaying.item.external_urls.spotify
  })
}

