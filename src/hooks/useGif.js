import { useState, useEffect } from 'react'
import { getFactApi } from '../api/catfact'
import { getGifApi } from '../api/giphy'
import getThreeWords from '../helper/getThreeWords'

const useGif = () => {
  const [title, setTitle] = useState('')
  const [gif, setGif] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    getFactApi()
      .then(string => setTitle(string))
  }, [])
  useEffect(() => {
    setIsLoading(true)
    getGifApi(getThreeWords(title))
      .then(gif => setGif(gif))
      .then(() => setIsLoading(false))
  }, [title])

  return {
    gif, isLoading, title
  }
}

export default useGif
