import { getNowPlaying } from "@/lib/spotify"

export async function GET() {
  try {
  const nowPlaying = await getNowPlaying()
  console.log(nowPlaying)
  return Response.json({
    name: nowPlaying.item.name,
    artists: nowPlaying.item.artists.map((artist: any) => artist.name),
    album: nowPlaying.item.album.name,
    albumImageUrl: nowPlaying.item.album.images[0].url,
    previewUrl: nowPlaying.item.preview_url,
    url: nowPlaying.item.external_urls.spotify
  }) } catch (error) {
    console.error(error)
    return Response.json(null)
  }
}

