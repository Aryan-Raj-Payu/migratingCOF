import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICBackArrow = ({ width, height, iconColor }) => (
  <IconBase iconName="back-arrow" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
  </IconBase>
)

ICBackArrow.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICBackArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICBackArrow
