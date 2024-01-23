import { Contact } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Pages: Contact', () => {
  it('should render Contact page', () => {
    const { debug } = render(<Contact />)

    debug()
  })
})
