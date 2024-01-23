import { useNavigation } from '@react-navigation/native'
import { IEvent } from '../../@types/event' // aquinao funcinou o path mapping
// import { getDayOfWeek } from '@utils/getDayOfWeek'
// import { getDay } from '@utils/getDay'
// import { getMonth } from '@utils/getMonth'
// import { getHourAndMinutes } from '@utils/getHour'
import { firstLetterUppercase } from '@utils/firstLetterUppercase'
import { Button } from 'native-base'
import * as S from './styles'
import { openGoogleMaps } from '@utils/openGoogleMaps'
import { AppNavigatorRoutesProps } from 'src/routes/app.routes'

export function EventWholeInformation({
  image,
  title,
  address,
  startDate,
  endDate,
  latitude,
  longitude,
}: IEvent) {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleContactOrganizer() {
    navigation.navigate('contact')
  }

  return (
    <S.Container>
      <S.EventTitle>{title}</S.EventTitle>
      <S.CustomText>
        {/* {firstLetterUppercase(getDayOfWeek(startDate))} - {getDay(startDate)}/
        {getMonth(startDate)} das {`${getHourAndMinutes(startDate)}`} as{' '}
        {`${getHourAndMinutes(endDate)}`} */}
      </S.CustomText>
      <S.CustomText>Endereço: {address}</S.CustomText>
      <Button
        // text="Abrir o endereço"
        onPress={() => openGoogleMaps(latitude, longitude)}
        testID="button-open-google-maps"
      >
        Abrir o endereço
      </Button>
      <Button
        onPress={handleContactOrganizer}
        testID="contact-organizer"
        // text="Fale com o organizador"
      >
        Fale com o organizador
      </Button>
    </S.Container>
  )
}
