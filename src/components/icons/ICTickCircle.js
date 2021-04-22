import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICTickCircle = ({ width, height, tickPath, iconColor }) => (
  <IconBase iconName="cross" width={width} height={height} iconColor={iconColor}>
    <circle cx={width / 2} cy={width / 2} r={width / 2} fill={iconColor} />
    <path
      d={tickPath}
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
)

ICTickCircle.defaultProps = {
  width: '24',
  height: '24',
  iconColor: '#16BC8A',
  tickPath: 'M7 13.5L9.50065 16L16.5007 9'
}

ICTickCircle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string,
  tickPath: PropTypes.string
}

export default ICTickCircle
