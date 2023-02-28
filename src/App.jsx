import { getThreeWordsApi } from './api/catfact'
import { useEffect, useState } from 'react'
import { getGifApi } from './api/giphy'
import { Gif } from './Gif'

const App = () => {
  const [search, setSearch] = useState('')
  const [gif, setGif] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getThreeWordsApi()
      .then(string => setSearch(string))
  }, [])
  useEffect(() => {
    setIsLoading(true)
    getGifApi(search)
      .then(gif => setGif(gif))
      .then(() => setIsLoading(false))
  }, [search])

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <h1>{search}</h1>
      <Gif gif={gif} />
    </>

  )
}

export default App
