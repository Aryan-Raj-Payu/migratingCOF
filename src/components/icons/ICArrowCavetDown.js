import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICArrowCavetDown = ({ width, height, iconColor }) => {
  return (
    <IconBase iconName="cavet-down" width={width} height={height} iconColor={iconColor}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </IconBase>
  )
}

ICArrowCavetDown.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICArrowCavetDown.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string,
  toogle: PropTypes.func
}

export default ICArrowCavetDown
