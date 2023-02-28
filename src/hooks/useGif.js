import { useState, useEffect } from 'react'
import { getThreeWordsApi } from '../api/catfact'
import { getGifApi } from '../api/giphy'

const useGif = () => {
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

  return {
    gif, isLoading, title: search
  }
}

export default useGif
