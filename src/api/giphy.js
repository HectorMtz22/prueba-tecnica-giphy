const GIPHY_TOKEN = import.meta.env.VITE_GIPHY_TOKEN

const GIPHY_URI = 'https://api.giphy.com/v1/gifs/search?'

export const getGifsApi = async (str) => {
  if (str.length < 1) str = 'random'
  const params = new URLSearchParams({
    api_key: GIPHY_TOKEN,
    q: str
  }).toString()
  return await fetch(GIPHY_URI + params)
    .then(data => data.json())
    .catch((reason) => console.log(reason))
}

export const getGifApi = async (str) => {
  const { data } = await getGifsApi(str)
  return data[0]
}
