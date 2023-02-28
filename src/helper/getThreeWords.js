export default function getThreeWords (string) {
  if (typeof string !== 'string') return ''
  return string.split(' ').slice(0, 3).join(' ')
}
