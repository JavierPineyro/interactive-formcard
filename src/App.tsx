import { BackCard, FrontCard } from './components/Card'
import Form from './components/Form'
import PopUp from './components/PopUp'
import { useForm } from './hooks/useForm'
import { useToggle } from './hooks/useToggle'

import { AnimatePresence } from 'framer-motion'
import { useShow } from './hooks/useShow'

function App() {
  const { formData, setFormData, handleInputChange, handleSubmit } = useForm()
  const { toggle, onReset, onToggle } = useToggle({ setFormData })
  const { show, onShow } = useShow()

  return (
    <main className=" h-screen w-screen flex flex-col sm:flex-row ">
      <aside className="relative w-100% h-[30%] sm:w-[30%] sm:h-full bg-gradient-bg bg-no-repeat">
        <FrontCard
          show={show}
          onShow={onShow}
          expDate={formData.inputExp}
          card={formData.inputCard}
          name={formData.inputName}
          left="sm:left-[25%]" top="sm:top-[14%]"
          background="bg-[url('./assets/bg-card-front.png')]"
        />
        <BackCard
          cvc={formData.inputCvc}
          left="sm:left-[42%]"
          bottom="sm:bottom-[18%]"
          background="bg-[url('./assets/bg-card-back.png')]"
        />
      </aside>
      <section className="flex w-full h-[70%] sm:h-full mx-auto items-center justify-center flex-1">
        <AnimatePresence>
          {!toggle
            ? <Form data={formData} onToggle={onToggle} handleSubmit={handleSubmit} handleChange={handleInputChange}
            />
            : <PopUp onReset={onReset} onToggle={onToggle} />}
        </AnimatePresence>
      </section>
    </main>
  )
}

export default App
