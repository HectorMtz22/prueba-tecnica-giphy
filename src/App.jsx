import useGif from './hooks/useGif'
import { Gif } from './Gif'

import styles from './App.module.css'

const App = () => {
  const { isLoading, gif, title } = useGif()
  if (isLoading) {
    return (
      <main className={styles.main}>
        <h2>Loading...</h2>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <Gif className={styles.gif} gif={gif} />
      <h1 className={styles.title}>{title}</h1>
    </main>

  )
}

export default App
