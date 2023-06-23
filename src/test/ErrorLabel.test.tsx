import { render, screen } from '@testing-library/react'
import ErrorLabel from '../components/ErrorLabel'

describe('Error Label component -->', () => {
  it('should render correctly', () => {
    render(<ErrorLabel>Invalid input</ErrorLabel>)
    expect(screen.getByText('Invalid input')).toBeDefined()
  })
})

/*
const getApples = vi.fn(() => 0)

getApples()

expect(getApples).toHaveBeenCalled()
expect(getApples).toHaveReturnedWith(0)
 */
