import { useState } from 'react'

interface Object {
  state: boolean
  showOverlay: () => void
  closeOverlay: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const useOverlay = (): Object => {
  const [state, setState] = useState(false)

  const showOverlay = (): void => {
    setState(true)
  }

  const closeOverlay = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    ev.target === ev.currentTarget && setState(false)
  }

  return { state, showOverlay, closeOverlay }
}

export { useOverlay }
