import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export function getHourAndMinutes(date: string) {
  const hourZone = 'America/Sao_Paulo'

  const dateWithTimezone = utcToZonedTime(new Date(date), hourZone)
  const hour = format(dateWithTimezone, 'HH:mm')

  return hour
}
