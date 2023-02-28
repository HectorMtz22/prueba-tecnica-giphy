const GIPHY_TOKEN = import.meta.env.VITE_GIPHY_TOKEN

const GIPHY_URI = 'https://api.giphy.com/v1/gifs/search?'

export const getGifsApi = async (str) => {
  return await fetch(GIPHY_URI + new URLSearchParams({
    api_key: GIPHY_TOKEN,
    q: str
  }).toString())
    .then(data => data.json())
}

export const getGifApi = async (str) => {
  const { data } = await getGifsApi(str)
  return data[0]
}
