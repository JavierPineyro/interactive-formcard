import { useEffect, useState } from 'react'
import { type State } from '../types'

interface Validation extends State {
  isFirstRender: boolean
}

export function useValidate({ inputName, inputCard, inputCvc, inputExp, isFirstRender }: Validation) {
  const [isErrorName, setErrorName] = useState(false)
  const [isErrorCard, setErrorCard] = useState(false)
  const [isErrorExp, setErrorExp] = useState(false)
  const [isErrorCvc, setErrorCvc] = useState(false)

  useEffect(() => {
    if (isFirstRender) return

    if (inputName.length < 2 || inputName === '') {
      setErrorName(true)
    } else {
      setErrorName(false)
    }
    if (inputCard <= 0 || String(inputCard).length !== 16) {
      setErrorCard(true)
    } else {
      setErrorCard(false)
    }
    if (inputExp.length === 0) {
      setErrorExp(true)
    } else {
      setErrorExp(false)
    }
    if (String(inputCvc).length !== 3 || inputCvc <= 0) {
      setErrorCvc(true)
    } else {
      setErrorCvc(false)
    }
  }, [inputName, inputCard, inputExp, inputCvc, isFirstRender])

  const isThereAnError = (isErrorName || isErrorCard || isErrorExp || isErrorCvc)

  return {
    isErrorName,
    isErrorCard,
    isErrorExp,
    isErrorCvc,
    isThereAnError
  }
}
