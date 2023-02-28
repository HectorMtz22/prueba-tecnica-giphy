import styles from './Gif.module.css'

export const Gif = ({ gif }) => {
  const {
    url: source,
    webp: sourceWebp
  } = gif.images.original
  return (
    <picture className={styles.img}>
      <source srcSet={sourceWebp} type='image/webp' />
      <img src={source} alt={gif?.title} />
    </picture>
  )
}
