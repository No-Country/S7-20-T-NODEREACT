import { useState } from 'react'

interface Object {
  isActive: boolean
  toggle: () => void
}

const useToggle = (): Object => {
  const [isActive, setIsActive] = useState(false)

  const toggle = (): void => setIsActive(!isActive)

  return { isActive, toggle }
}

export { useToggle }
