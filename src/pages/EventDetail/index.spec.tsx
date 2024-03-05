import { NavigationContainer } from '@react-navigation/native'
import { EventDetail } from '.'
import { render } from '@testing-library/react-native'

describe('Pages: Events', () => {
  it('should render Events page', () => {
    const { debug } = render(
      <NavigationContainer>
        <EventDetail />
      </NavigationContainer>,
    )
    debug()
  })
})
