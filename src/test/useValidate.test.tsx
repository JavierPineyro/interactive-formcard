import { renderHook } from '@testing-library/react'
import { useValidate } from '../hooks/useValidate'

describe('useValidate', () => {
  const MOCK_DATA = {
    inputName: 'John Doe',
    inputCard: 1234567899876543,
    inputCvc: 123,
    inputExp: '12/22',
    isFirstRender: false
  }

  it('hook should return correct values when input is valid', () => {
    const { result } = renderHook(() => useValidate(MOCK_DATA))

    expect(result.current).toMatchObject({
      isErrorName: false,
      isErrorCard: false,
      isErrorExp: false,
      isErrorCvc: false,
      isThereAnError: false
    })
  })

  it('validations return false when is first render', () => {
    const { result } = renderHook(() => useValidate({ ...MOCK_DATA, isFirstRender: true }))

    expect(result.current.isThereAnError).toBeFalsy()
  })
})
