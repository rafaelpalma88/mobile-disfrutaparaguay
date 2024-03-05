import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axios from 'axios'
import { Header } from '@components/Header'
import { VStack, Button } from 'native-base'
// import { getDayOfWeek } from '@utils/getDayOfWeek'
// import { getDay } from '@utils/getDay'
// import { getMonth } from '@utils/getMonth'
// import { getHourAndMinutes } from '@utils/getHour'
import { firstLetterUppercase } from '@utils/firstLetterUppercase'
import * as S from './styles'
import { openGoogleMaps } from '@utils/openGoogleMaps'
import { IEvent } from 'src/@types/event'
import { useRoute } from '@react-navigation/native'
import { EventWholeInformation } from '@components/EventWholeInformations'
import { SkeletonEventDetail } from './SkeletonEventDetail'

export interface Props {
  id: string
}

export function EventDetail() {
  const [event, setEvent] = useState<IEvent | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const route = useRoute()
  const { id } = route.params as { id: string }

  useEffect(() => {
    async function getEvent(id: string) {
      try {
        const result = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/events/${id}`,
        )
        setEvent(result?.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getEvent(id)
  }, [])

  return (
    <>
      <Header showBackButton title="Detalhe do evento" />
      <VStack flex={1}>
        <S.Container>
          
          {loading && (
            <SkeletonEventDetail />
          )}

          {!loading && event && (
            <EventWholeInformation
              key={event.id}
              id={event.id}
              active={event.active}
              image={event.image}
              title={event.title}
              address={event.address}
              description={event.description}
              startDate={event.startDate}
              endDate={event.endDate}
              latitude={event.latitude}
              longitude={event.longitude}
            />
          )}
        </S.Container>
      </VStack>
    </>
  )
}
