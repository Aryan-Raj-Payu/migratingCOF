import PropTypes from 'prop-types'

import styles from 'styles/elements/button.module.scss'

const Button = ({ size, variant, width, textDecoration, onClick, disabled, children }) => {
  const variantStyle = styles[`btn${variant}`]
  const sizeStyle = styles[`btn${size}`]
  const widthBaseOnDeviceStyle = styles[width]
  const textDecorationStyle = styles[textDecoration]
  return (
    <button
      disabled={disabled}
      className={`${widthBaseOnDeviceStyle} ${styles.btn} ${variantStyle} ${sizeStyle} ${textDecorationStyle}`}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: null,
  variant: null,
  width: null,
  disabled: false,
  textDecoration: ''
}

Button.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  textDecoration: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any
}

export default Button
