import { Home } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Pages: Home', () => {
  it('should render Home page', () => {
    const { debug } = render(<Home />)

    debug()
  })
})
