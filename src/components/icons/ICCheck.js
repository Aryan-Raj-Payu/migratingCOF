import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICCheck = ({ width, height, iconColor }) => (
  <IconBase iconName="camera" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </IconBase>
)

ICCheck.defaultProps = {
  width: '24',
  height: '24',
  iconColor: 'white'
}

ICCheck.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICCheck
