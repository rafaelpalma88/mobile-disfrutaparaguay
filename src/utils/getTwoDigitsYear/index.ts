export function getTwoDigitsYear(date: string) {
  const month = new Date(date).getFullYear().toString().slice(-2)

  return month
}
