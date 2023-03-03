const CATFACT_URI = 'https://catfact.ninja/fact'

export const getFactApi = async () => {
  return await fetch(CATFACT_URI)
    .then(res => res.json())
    .then(data => data.fact)
    .catch((reason) => console.log(reason))
}
