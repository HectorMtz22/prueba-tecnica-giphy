import { getThreeWordsApi } from './api/catfact'
import { useEffect, useState } from 'react'
import { getGifApi } from './api/giphy'

const App = () => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    getThreeWordsApi()
      .then(string => setSearch(string))
  }, [])
  useEffect(() => {
    getGifApi(search)
      .then(gif => console.log(gif))
  }, [search])

  return (
    <h1>Hello! {search}</h1>
  )
}

export default App
