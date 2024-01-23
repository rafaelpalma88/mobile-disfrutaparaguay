import { Participant } from '.'
import { render, screen } from '@testing-library/react-native'

describe('Component: Button', () => {
  const name = 'John Doe'
  const mockFn = jest.fn()

  it('should render button component', () => {
    const { debug } = render(<Participant name={name} onRemove={mockFn} />)
    debug()

    const component = screen.queryByText('John Doe')

    expect(component).toBeTruthy()
  })

  // it('should click button component', () => {
  //   const { debug } = render(<Participant name={name} onRemove={mockFn} />)
  //   debug()

  //   const removeButton = screen.queryByTestId('remove-button')

  //   expect(removeButton).simulate('click')
  // })
})
