import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICSecure = ({ width, height, iconColor }) => (
  <IconBase iconName="security" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
  </IconBase>
)

ICSecure.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICSecure.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICSecure
