import { NavigationContainer } from '@react-navigation/native'
import { EventsList } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Pages: Events', () => {
  it('should render Events page', () => {
    const { debug } = render(
      <NavigationContainer>
        <EventsList />
      </NavigationContainer>,
    )
    debug()
  })
})
