import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICArrowCavetUp = ({ width, height, iconColor }) => (
  <IconBase iconName="cavet-up" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
  </IconBase>
)

ICArrowCavetUp.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICArrowCavetUp.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICArrowCavetUp
