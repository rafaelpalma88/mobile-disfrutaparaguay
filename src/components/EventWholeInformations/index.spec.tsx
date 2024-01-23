import { openGoogleMaps } from '@utils/openGoogleMaps'
import { EventResume } from '.'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

const eventMock = {
  id: '7532aeea9-0859-4128-ac49-144da92b0276',
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
  startDate: '2024-04-29T22:00:00.000Z',
  endDate: '2024-04-30T00:00:00.000Z',
  latitude: '-23.60374719010013',
  longitude: '-46.62603453578621',
}

describe('Component: EventResume', () => {
  it('should call openGoogleMaps on button press', () => {
    jest.mock('@utils/openGoogleMaps', () => ({
      openGoogleMaps: jest.fn(),
    }))

    const MockedNativeBaseConfigProvider = ({
      children,
    }: {
      children: React.ReactNode
    }) => <NativeBaseProvider>{children}</NativeBaseProvider>

    const MockedNavigationContainer = ({
      children,
    }: {
      children: React.ReactNode
    }) => <NavigationContainer>{children}</NavigationContainer>

    render(
      <MockedNativeBaseConfigProvider>
        <MockedNavigationContainer>
          <EventResume
            id={eventMock.id}
            active={eventMock.active}
            image={eventMock.image}
            title={eventMock.title}
            address={eventMock.address}
            description={eventMock.description}
            startDate={eventMock.startDate}
            endDate={eventMock.endDate}
            latitude={eventMock.latitude}
            longitude={eventMock.longitude}
          />
        </MockedNavigationContainer>
      </MockedNativeBaseConfigProvider>,
    )

    const openAddressButton = screen.getByTestId('button-open-google-maps')
    fireEvent.press(openAddressButton)

    expect(openGoogleMaps).toHaveBeenCalledWith(
      eventMock.latitude,
      eventMock.longitude,
    )
  })
})
