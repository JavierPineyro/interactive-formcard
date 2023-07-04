import { useState, useCallback } from 'react'
import { type State } from '../types'
import { INITIAL_STATE } from '../utils/constants'

export function useForm() {
  const [formData, setFormData] = useState<State>(INITIAL_STATE)

  const handleInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target

    if (name === 'inputCard' && String(value).length > 16) {
      return
    }
    if (name === 'inputCvc' && String(value).length > 3) {
      return
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback((evt: React.FormEvent<HTMLFormElement>, isThereAnError: boolean, onToggle: () => void) => {
    evt.preventDefault()
    if (isThereAnError) return

    onToggle()
  }, [])

  return { formData, setFormData, handleInputChange, handleSubmit }
}
