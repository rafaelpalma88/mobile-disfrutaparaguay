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
import { SkeletonEventsList } from './SkeletonEventsList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthNavigatorRoutesProps } from 'src/routes/auth.routes'

export function EventsList() {
  const [events, setEvents] = useState<IEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const navigation = useNavigation<AppNavigatorRoutesProps & AuthNavigatorRoutesProps>()

  useEffect(() => {
   
    async function getEvents() {
      try {
        const result = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/events`,
        )
        // resolver a questão do mock no expo-go
        await setEvents(result.data)

      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        await setLoading(false)
      }
    }

    getEvents()
  }, [])

  return (
    <>
      <Header title="Eventos" />
      <VStack flex={1}>
        <S.Container>
          {loading && (
            // <View>
            //   <Text style={{ color: '#FFF' }}>Carregando eventos...</Text>
            // </View>
            <SkeletonEventsList />
          )}

          {!loading && events.length === 0 && !error &&(
            <View>
              <Text style={{ color: '#FFF' }}>Não há eventos cadastrados</Text>
            </View>
          )}

          {!loading && error && (
            <View>
              <Text style={{ color: '#FFF' }}>Houve um erro na requisição com a API</Text>
            </View>
          )}

          <View><Button onPress={() => {
            AsyncStorage.removeItem('@disfrutaparaguay-accesstoken')
            navigation.navigate('signin')
          }}>Excluir AsyncStorage</Button></View>

          {!loading && events.length > 0 && !error && (
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
