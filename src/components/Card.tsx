import CardNumber from './CardNumber'
import ShowButton from './ShowButton'
import { DEFAULT_DATE, DEFAULT_NAME } from '../utils/constants'
import { formatDate } from '../utils/formatDate'
import { type Back, type Front } from '../types'

export function FrontCard(props: Front) {
  const { show, onShow, card, name, expDate, background, top = '', left } = props

  const formattedName = name.length === 0 ? DEFAULT_NAME : name
  const formattedDate = expDate.length === 0 ? DEFAULT_DATE : formatDate(expDate)

  return (
    <div
      className={`absolute z-50 sm:z-10 top-[51%] left-[3%] ${top} ${left} w-[295px] h-[160px] sm:w-96 sm:h-[216px] py-6 px-4 rounded-lg shadow-2xl text-white aspect-video bg-cover bg-center bg-no-repeat ${background} hover:shadow-xl hover:shadow-input-active-gradient-from/50 sm:hover:skew-x-3 select-none transition-all flex flex-col justify-between [transform:translateZ(0)] [backface-visibility:hidden] antialiased hover:subpixel-antialiased`}>

      <ShowButton show={show} onShow={onShow} />
      <CardNumber show={show} card={card} />
      <footer className='flex justify-between text-[11px] sm:text-sm sm:px-4 tracking-widest'>
        <div className='uppercase sm:px-[5px] w-[230px] max-w-[240px] overflow-hidden truncate '>{formattedName}</div>
        <div>{formattedDate}</div>
      </footer>
    </div>
  )
}

export function BackCard({ cvc, bottom, background, left }: Back) {
  const formattedCvc = String(cvc).padEnd(3, '0')
  return (
    <div
      className={`absolute sm:z-10 bottom-[14%] left-[19%] ${bottom} ${left} w-[295px] h-[160px] sm:w-96 sm:h-auto rounded-lg shadow-xl text-black/80 aspect-video bg-cover bg-center bg-no-repeat ${background} hover:shadow-xl hover:shadow-input-active-gradient-from/50 sm:hover:skew-x-3 [perspective:1500px] select-none transition-all italic flex items-center justify-end px-10 font-thin [transform:translateZ(0)] [backface-visibility:hidden] antialiased hover:subpixel-antialiased text-[12px] sm:text-base`}>
      {formattedCvc}
    </div>
  )
}
