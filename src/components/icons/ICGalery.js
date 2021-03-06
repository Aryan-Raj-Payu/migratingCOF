import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICGalery = ({ width, height, iconColor }) => (
  <IconBase iconName="camera" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </IconBase>
)

ICGalery.defaultProps = {
  width: '24',
  height: '24',
  iconColor: 'white'
}

ICGalery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICGalery
