import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  aadhaarInput as aadhaarInputStyle,
  inputContainer
} from 'styles/elements/inputs/aadhaar-input.module.scss'

const AadhaarInput = ({ onChangeValue }) => {
  const [aadhaarNo, setAadhaar] = useState()

  useEffect(() => {
    onChangeValue(aadhaarNo)
  }, [aadhaarNo])

  const handleChange = (element) => {
    const { value } = element
    if (isNaN(value)) return false
    setAadhaar(value)
    if (value && value.length === 4) {
      element.blur()
    }
  }

  return (
    <>
      <div className={inputContainer}>
        <input type="text" name="aadhaar" className={aadhaarInputStyle} value="****" readOnly />
        <input type="text" name="aadhaar" className={aadhaarInputStyle} value="****" readOnly />
        <input
          type="text"
          name="aadhaar"
          className={aadhaarInputStyle}
          value={aadhaarNo}
          maxLength="4"
          onChange={(e) => handleChange(e.target)}
          autoComplete="off"
        />
      </div>
    </>
  )
}

AadhaarInput.defaultProps = {}

AadhaarInput.propTypes = {
  onChangeValue: PropTypes.func
}

export default AadhaarInput
