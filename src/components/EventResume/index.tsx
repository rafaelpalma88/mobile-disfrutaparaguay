import { useNavigation } from '@react-navigation/native'
import { IEvent } from '../../@types/event' // aquinao funcinou o path mapping
import { getDayOfWeek } from '@utils/getDayOfWeek'
import { getDay } from '@utils/getDay'
import { getMonth } from '@utils/getMonth'
import { getHourAndMinutes } from '@utils/getHour'
import { firstLetterUppercase } from '@utils/firstLetterUppercase'
import { Button } from 'native-base'
import * as S from './styles'
import { openGoogleMaps } from '@utils/openGoogleMaps'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

export function EventResume({
  id,
  image,
  title,
  address,
  startDate,
  endDate,
  latitude,
  longitude,
}: IEvent) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleAccessEventDetail(id: string) {
    navigation.navigate('eventDetail', { id })
  }

  return (
    <S.Container>
      <S.EventTitle>{title}</S.EventTitle>
      <S.CustomText>
        {firstLetterUppercase(getDayOfWeek(startDate))} - {getDay(startDate)}/
        {getMonth(startDate)} das {`${getHourAndMinutes(startDate)}`} as{' '}
        {`${getHourAndMinutes(endDate)}`}
      </S.CustomText>
      <Button
        onPress={() => {
          handleAccessEventDetail(id)
        }}
      >
        Veja mais
      </Button>
    </S.Container>
  )
}
