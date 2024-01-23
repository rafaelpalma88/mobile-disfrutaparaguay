import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function getDayOfWeek(date: string) {
  const dayOfWeek = format(new Date(date), 'EEEE', { locale: ptBR })

  return dayOfWeek
}
