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

const eventMockTest = {
  id: '752aeea9-0859-4128-ac49-14eda92b0276',
  active: true,
  image:
    '586bc3d74566e1d9cf6096acb592905f-513d7a0ab11e38f7bd117d760146fed3_esfiha_imigrantes.jpg',
  title: 'Esfiha Imigrantes',
  address:
    'Av. Dr. Ricardo Jafet, 3332 - Vila Gumercindo, São Paulo - SP, 04260-020',
  description: [
    'Eleita entre as melhores esfihas de São Paulo e com pontuação máxima na pesquisa "Você é o crítico", do Guia da Folha, em que consumidores avaliaram comida, ambiente, serviços e atendimento, a Esfiha Imigrantes, uma casa simples, consolidou-se como referência em comida árabe na cidade',
    'Chegou a hora de conhecer mais este local com a melhor companhia! Junte-se conosco nesta noite de sábado!',
  ],
  startDate: '2023-04-29T22:00:00.000Z',
  endDate: '2023-04-30T00:00:00.000Z',
  latitude: '-23.60374719010013',
  longitude: '-46.62603453578621',
}

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
        // const result = await axios.get(
        //   `https://api-descobrindosaopaulo.onrender.com/events/${id}`,
        // )
        setEvent(eventMockTest)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getEvent(id)
  }, [])

  useEffect(() => {
    console.log('event', event)
  }, [event])

  function handleContactOrganizer() {
    return <Text>TEste</Text>
  }

  return (
    <>
      <Header title="Detalhe do evento" />
      <VStack flex={1}>
        <S.Container>
          {/* <Text style={{ color: '#FFF' }}>ID: {id}</Text> */}

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
