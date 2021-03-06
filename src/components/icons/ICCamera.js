import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICCamera = ({ width, height, iconColor }) => (
  <IconBase iconName="camera" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </IconBase>
)

ICCamera.defaultProps = {
  width: '24',
  height: '24',
  iconColor: 'white'
}

ICCamera.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICCamera
