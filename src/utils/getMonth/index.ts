import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function getMonth(date: string) {
  const month = format(new Date(date), 'MMM', { locale: ptBR })

  return month
}
