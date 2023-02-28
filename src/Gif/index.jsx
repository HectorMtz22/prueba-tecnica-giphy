export const Gif = ({ gif }) => {
  const {
    url: source,
    webp: sourceWebp
  } = gif.images.original
  return (
    <picture>
      <source srcSet={sourceWebp} type='image/webp' />
      <img src={source} alt={gif?.title} />
    </picture>
  )
}
