import PropTypes from 'prop-types'

import { container, checkmark } from 'styles/elements/inputs/radio.module.scss'

function RadioInput({ name, value, onChange, onClick, ...rest }) {
  return (
    <label className={container}>
      <input
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        onClick={onClick}
        {...rest}
      />
      <span className={checkmark}></span>
    </label>
  )
}

RadioInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

export default RadioInput
