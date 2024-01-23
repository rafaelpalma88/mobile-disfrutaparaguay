import { Button } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Component: Button', () => {
  it('should render button component', () => {
    render(<Button text="Teste" />)
    // const { debug } = render(<Button text="Teste" />
    // debug()

    const component = screen.queryByTestId('button')

    expect(component).toBeTruthy()
  })
})
