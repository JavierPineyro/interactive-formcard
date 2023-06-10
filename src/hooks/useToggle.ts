import { useState, useCallback } from 'react'
import { INITIAL_STATE } from '../utils/constants'
import { type State } from '../types'

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<State>>
}
export function useToggle({ setFormData }: Props) {
  const [toggle, setToggle] = useState(false)
  const onToggle = useCallback(() => {
    setToggle(prev => !prev)
  }, [setToggle])

  const onReset = useCallback(() => {
    setFormData(INITIAL_STATE)
  }, [setFormData])

  return { toggle, onReset, onToggle }
}
