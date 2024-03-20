import { Button } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Component: Button', () => {
  it('should render button component', () => {
    render(
      <Button text="Teste" />
    )
    screen.debug()
    const componentId = screen.queryByTestId('button')
    const componentText = screen.queryByText('Teste')

    expect(componentId).toBeTruthy()
    expect(componentText).toBeTruthy()
  })
})
