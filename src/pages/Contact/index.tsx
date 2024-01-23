import { Header } from '@components/Header'
import * as S from './styles'
import { VStack } from 'native-base'

export function Contact() {
  return (
    <>
      <Header title="Contato" />
      <VStack flex={1}>
        <S.Title>Fale com o organizador</S.Title>
      </VStack>
    </>
  )
}
