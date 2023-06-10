export interface State {
  inputName: string
  inputCard: number
  inputExp: string
  inputCvc: number
}

interface CardProps {
  background: string
  left: string
}

export interface ShowProps {
  show: boolean
  onShow: () => void
}

export interface Front extends CardProps {
  top: string
  card: number
  name: string
  expDate: string
  show: boolean
  onShow: () => void
}

export interface Back extends CardProps {
  bottom: string
  cvc: number
}
