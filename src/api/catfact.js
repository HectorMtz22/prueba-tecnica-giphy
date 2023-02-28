const CATFACT_URI = 'https://catfact.ninja/fact'

export const getFactApi = async () => {
  return await fetch(CATFACT_URI)
    .then(data => data.json())
}

export const getThreeWordsApi = async () => {
  const { fact } = await getFactApi()
  return fact.split(' ').slice(0, 3).join(' ')
}
