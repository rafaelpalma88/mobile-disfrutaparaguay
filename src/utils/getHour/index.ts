import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function getHourAndMinutes(date: string) {
  const formatedHoursAndMinutes = format(new Date(date), 'HH:mm', {
    locale: ptBR,
  })

  return formatedHoursAndMinutes
}
