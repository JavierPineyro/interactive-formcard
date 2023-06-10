import { useState, useCallback } from 'react'

export function useShow() {
  const [show, setShow] = useState(false)
  const onShow = useCallback(() => { setShow(prev => !prev) }, [])

  return { show, onShow }
}
