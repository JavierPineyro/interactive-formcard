interface Props {
  children: React.ReactNode
}

function ErrorLabel({ children }: Props) {
  return (
    <p className="mt-1 h-[20px] lowercase text-pink-600 text-xs">{children}</p>
  )
}

export default ErrorLabel
