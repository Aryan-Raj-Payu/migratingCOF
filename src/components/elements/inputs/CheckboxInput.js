import PropTypes from 'prop-types'

import { container, checkmark } from 'styles/elements/inputs/checkbox.module.scss'

function CheckboxInput({ name, value, onChange, ...rest }) {
  return (
    <label className={container}>
      <input name={name} type="checkbox" value={value} onChange={onChange} {...rest} />
      <span className={checkmark}></span>
    </label>
  )
}

CheckboxInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default CheckboxInput
