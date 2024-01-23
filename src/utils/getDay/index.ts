import { format } from 'date-fns'

export function getDay(date: string) {
  const day = format(new Date(date), 'dd')

  return day
}
