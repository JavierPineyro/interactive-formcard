import { type ShowProps } from '../types'
import { Eye, EyeClosed } from './Icons'

function ShowButton({ show, onShow }: ShowProps) {
  return (
    <div className='flex items-center justify-start max-h-full sm:pl-5'>
      <button title={`${show ? 'hide' : 'show'}`} aria-label='Show card number' role="button" aria-pressed={show} onClick={onShow} className='flex justify-center items-center  w-6 h-6 sm:w-7 sm:h-w-7'>
        {show ? <EyeClosed /> : <Eye />}
      </button>
    </div>
  )
}

export default ShowButton
