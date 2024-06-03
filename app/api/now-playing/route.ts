export async function GET() {
  const res = await fetch(process.env.SPOTIFY_API!)
  const data = await res.json()
  console.log(data)
  return Response.json(data)
}