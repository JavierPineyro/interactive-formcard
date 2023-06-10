import { useEffect, useRef } from 'react'
import { useValidate } from '../hooks/useValidate'
import { type State } from '../types'
import ErrorLabel from './ErrorLabel'

import { motion } from 'framer-motion'

interface Props {
  data: State
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>, isThereAnError: boolean, onToggle: () => void) => void
  onToggle: () => void
}

function Form({ data, handleChange, handleSubmit, onToggle }: Props) {
  const { inputName, inputCard, inputCvc, inputExp } = data
  const isFirstRender = useRef(true)

  const {
    isErrorName,
    isErrorCard,
    isErrorExp,
    isErrorCvc,
    isThereAnError
  } = useValidate({ inputName, inputCard, inputCvc, inputExp, isFirstRender: isFirstRender.current })

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  const inputCardFormatted = inputCard === 0 ? '' : inputCard
  const inputCvcFormatted = inputCvc === 0 ? '' : inputCvc

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }} transition={{ ease: 'easeInOut', duration: 0.4 }} className='flex flex-col w-[350px] max-w-[500px] pt-[55px] pb-0 py-5 sm:p-0 w-50 gap-1 sm:gap-2'

      onSubmit={(evt) => {
        handleSubmit(evt, isThereAnError, onToggle)
      }}
    >

      <label className='uppercase flex flex-col [&>input]:text-lg'>
        Cardholder name
        <input name='inputName' autoComplete='off' onChange={handleChange} required value={inputName} placeholder='eg: Merry Clawthorn' type="text" />
        <ErrorLabel>{isErrorName ? 'invalid name' : ''}</ErrorLabel>
      </label>

      <label className='uppercase flex flex-col [&>input]:text-lg'>
        Card number
        <input name='inputCard' onChange={handleChange} required value={inputCardFormatted} inputMode="decimal" placeholder='eg: 0000 0000 0000 0000' type="number" />
        <ErrorLabel>{isErrorCard ? 'invalid card number' : ''}</ErrorLabel>
      </label>

      <div className='flex justify-between sm:justify-normal gap-4'>
        <label className='uppercase flex flex-col [&>input]:text-lg'>
          Exp. date (MM/YY)
          <input name='inputExp' onChange={handleChange} required value={inputExp} placeholder='eg: 05-29' min='2023-01' type="month"
            className='' />
          <ErrorLabel>{isErrorExp ? 'invalid date' : ''}</ErrorLabel>
        </label>

        <label className='uppercase flex flex-col w-full [&>input]:text-lg'>
          CVC
          <input name='inputCvc' onChange={handleChange} required value={inputCvcFormatted} inputMode="decimal" placeholder='000' min={0} max={999} type="number"
            className="focus:invalid:outline-none" />
          <ErrorLabel>{isErrorCvc ? 'invalid cvc number' : ''}</ErrorLabel>
        </label>
      </div>

      <button disabled={isThereAnError} className={'w-full rounded-lg mt-3 sm:mt-2 px-2 py-3 bg-very-dark-violet text-white hover:bg-gradient-to-r hover:from-input-active-gradient-from hover:to-input-active-gradient-to transition-all disabled:opacity-50 disabled:cursor-not-allowed'} type='submit'>Confirm</button>
    </motion.form>
  )
}

export default Form
