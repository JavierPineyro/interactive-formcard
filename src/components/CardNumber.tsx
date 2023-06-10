import { HIDDEN_SYMBOLS } from '../utils/constants'
import { formatCardNumber } from '../utils/formatCardNumber'

interface Props {
  show: boolean
  card: number
}

function CardNumber({ show, card }: Props) {
  const hiddenCardNumber = HIDDEN_SYMBOLS.match(/.{1,4}/g)?.join(' ')
  const separatedCardNumber = formatCardNumber(card)

  return (
    <>
      {show && <div className='tracking-widest sm:h-full flex items-center justify-center text-xl sm:text-2xl text-center max-h-full overflow-hidden'>{separatedCardNumber}</div>}

      {!show && <div className='tracking-[0.17em] sm:h-full flex items-center justify-center text-xl sm:text-2xl text-center max-h-full overflow-hidden'>{hiddenCardNumber}</div>}
    </>
  )
}

export default CardNumber
