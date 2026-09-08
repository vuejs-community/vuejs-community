const numberFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export function formatCount(value: number) {
  return numberFormatter.format(value)
}
