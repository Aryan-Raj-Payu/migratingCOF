import { useState } from 'react'

const useRadioState = (initialValue = null) => {
  const [radioValue, setRadioValue] = useState(initialValue)

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value)
  }

  return { radioValue, handleRadioChange }
}

export default useRadioState
