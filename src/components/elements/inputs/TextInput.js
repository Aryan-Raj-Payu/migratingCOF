import { useState } from 'react'
import PropTypes from 'prop-types'

function TextInput(props) {
  const { onChange } = props

  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) onChange(inputValue)
  }

  return (
    <>
      <input {...props} onChange={handleChange} />
    </>
  )
}

TextInput.defaultProps = {
  type: 'text'
}

TextInput.propTypes = {
  type: PropTypes.string.required,
  onChange: PropTypes.func
}

export default TextInput
