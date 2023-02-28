import { getThreeWordsApi } from './api/catfact'
import { useEffect, useState } from 'react'
import { getGifApi } from './api/giphy'
import { Gif } from './Gif'

import styles from './App.module.css'

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

  if (isLoading) {
    return (
      <main className={styles.main}>
        <h2>Loading...</h2>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{search}</h1>
      <Gif gif={gif} />
    </main>

  )
}

export default App
