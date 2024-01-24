import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import { EventResume } from '@components/EventResume'
import { IEvent } from '../../@types/event'
// import { events as eventsMock } from '../../../events'
import * as S from './styles'
import { Header } from '@components/Header'
import { Button, Skeleton, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'
// import dotenv from "dotenv";

export function EventsList() {
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const eventsMock = [
    {
      id: "752aeea9-0859-4128-ac49-14eda92b0276",
      active: true,
      image:
        "586bc3d74566e1d9cf6096acb592905f-513d7a0ab11e38f7bd117d760146fed3_esfiha_imigrantes.jpg",
      title: "Esfiha Imigrantes",
      address:
        "Av. Dr. Ricardo Jafet, 3332 - Vila Gumercindo, São Paulo - SP, 04260-020",
      description: [
        'Eleita entre as melhores esfihas de São Paulo e com pontuação máxima na pesquisa "Você é o crítico", do Guia da Folha, em que consumidores avaliaram comida, ambiente, serviços e atendimento, a Esfiha Imigrantes, uma casa simples, consolidou-se como referência em comida árabe na cidade',
        "Chegou a hora de conhecer mais este local com a melhor companhia! Junte-se conosco nesta noite de sábado!",
      ],
      startDate: "2023-04-29T22:00:00.000Z",
      endDate: "2023-04-30T00:00:00.000Z",
      latitude: "-23.60374719010013",
      longitude: "-46.62603453578621",
    },
    {
      id: "9fefe65e-b4ac-4ec7-8b19-1f17069f84f1",
      active: false,
      image:
        "586bc3d74566e1d9cf6096acb592905f-513d7a0ab11e38f7bd117d760146fed3_esfiha_imigrantes.jpg",
      title: "Hopi Hari",
      address:
        "Av. Dr. Ricardo Jafet, 3332 - Vila Gumercindo, São Paulo - SP, 04260-020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget sapien sed lectus imperdiet vehicula quis vitae risus. Donec at dui pretium, vehicula quam nec, tristique leo. Nam egestas tellus orci, non commodo urna imperdiet nec. Sed at libero massa",
      startDate: "2023-04-29T22:00:00.000Z",
      endDate: "2023-04-30T00:00:00.000Z",
      latitude: "-23.60374719010013",
      longitude: "-46.62603453578621",
    },
  ];


  useEffect(() => {
   
    async function getEvents() {
      try {
        const result = await axios.get(
          // `${process.env.API_URL}/events`,
          'https://api-disfruta-paraguay.onrender.com/events'
        )
        // resolver a questão do mock no expo-go
        await setEvents(result.data)

        // setEvents(eventsMock)
      } catch (error) {
        console.log(error)
      } finally {
        await setLoading(false)
      }
    }

    getEvents()
  }, [])

  useEffect(() => {
    console.log('events xxxx', events)
  }, [events])

  useEffect(() => {
    console.log('loading xxxx', loading)
  }, [loading])

  return (
    <>
      <Header title="Eventos" />
      <VStack flex={1}>
        <S.Container>
          {loading && (
            // <View>
            //   <Text style={{ color: '#FFF' }}>Carregando eventos...</Text>
            // </View>
            <VStack pt={6}>
              {/* Aprimorar este Skeleton, deixar ele mais bonito */}
              <Skeleton
                h={100}
                rounded="md"
                startColor="gray.500"
                endColor="gray.400"
                marginBottom={6}
              />
              <Skeleton
                h={100}
                rounded="md"
                startColor="gray.500"
                endColor="gray.400"
                marginBottom={6}
              />
              <Skeleton
                h={100}
                rounded="md"
                startColor="gray.500"
                endColor="gray.400"
                marginBottom={6}
              />
            </VStack>
          )}

          {!loading && events.length === 0 && (
            <View>
              <Text style={{ color: '#FFF' }}>Não há eventos cadastrados</Text>
            </View>
          )}

          {!loading && events.length > 0 && (
            <S.EventsList>
              {events
                .filter((event) => event.active)
                .map((event) => {
                  return (
                    <EventResume
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
                  )
                })}
            </S.EventsList>
          )}

          {/* Caso haja erro na API, fazer um tratamento e exibir na tela */}
        </S.Container>
      </VStack>
    </>
  )
}
