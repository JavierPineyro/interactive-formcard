// W 350px
import { motion } from 'framer-motion'
import { TickIcon } from './Icons'

interface Props {
  onToggle: () => void
  onReset: () => void
}

export default function PopUp({ onToggle, onReset }: Props) {
  const handleClick = () => {
    onReset()
    onToggle()
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} transition={{ ease: 'easeInOut', duration: 0.4 }}
      exit={{ opacity: 0, scale: 0 }} className=" w-[350px] max-w-[500px] flex flex-col gap-6 justify-center items-center">
      <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gradient-to-b from-input-active-gradient-from to-input-active-gradient-to">
        <TickIcon />
      </div>
      <div className="text-center">
        <p className="mb-2 uppercase text-2xl text-very-dark-violet">Thank you!</p>
        <p className="text-md text-dark-graylish-violet">We´ve added your card details</p>
      </div>
      <button className="w-full rounded-lg mt-2 px-2 py-3 bg-very-dark-violet text-white hover:bg-gradient-to-r hover:from-input-active-gradient-from hover:to-input-active-gradient-to transition-all" onClick={handleClick}>Continue</button>
    </motion.div>
  )
}
