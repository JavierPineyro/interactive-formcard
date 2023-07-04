import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import ShowButton from '../components/ShowButton'
import { useShow } from '../hooks/useShow'

describe('ShowButton component -->', () => {
  it('Render correct title attribute on initial render', async () => {
    const { result } = renderHook(() => useShow())
    const show = result.current.show
    const onShow = result.current.onShow

    render(<ShowButton show={show} onShow={onShow} />)
    const title = screen.getByRole('button').getAttribute('title')

    expect(title).toContain('show')
  })

  it('Call onShow function correctly', async () => {
    const { result } = renderHook(() => useShow())

    act(() => { result.current.onShow() })

    expect(result.current.show).toBeTruthy()
  })

  it('Render correct title when user clicks on button', async () => {
    /*
      Como le llegan props no es necesario que mire que cambie el contenido solo tengo que asegurarme que lasd funciones hayan sido llamadas, por lo tanto solo mockeo la funcion con vi.fn y me aseguro que se hayan llamado una vez cuando hagp click. la funcion se la paso como on show al componente
    */
    const onShow = vi.fn()
    render(<ShowButton show={false} onShow={onShow} />)
    const button = await screen.findByRole('button')

    fireEvent.click(button)

    expect(await screen.findByTitle(/show/i)).toBeDefined()
    expect(onShow).toHaveBeenCalledTimes(1)
  })
})
