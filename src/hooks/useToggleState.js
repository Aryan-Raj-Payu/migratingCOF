import { useState } from 'react'

const useToggleState = ({ initialOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const onToggle = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, onToggle }
}

export default useToggleState
