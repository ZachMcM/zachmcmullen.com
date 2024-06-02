const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const TOKEN_URL = "https://accounts.spotify.com/api/token"
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

export type Song = {
  name: string,
  artists: string[],
  album: string,
  albumImageUrl: string,
  previewUrl: string,
  url: string
}

async function getAccessToken() {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken!,
    })
  })

  const data = await res.json()

  return data.access_token
}

export async function getNowPlaying() {
  const accessToken = await getAccessToken()
  console.log(accessToken)

  const res = await fetch(NOW_PLAYING_URL, {
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  })

  const data = await res.json()

  console.log(data.item)

  return data
}