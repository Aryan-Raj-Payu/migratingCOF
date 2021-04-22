import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICError = ({ width, height, iconColor }) => (
  <IconBase iconName="cavet-down" width={width} height={height} iconColor={iconColor}>
    <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </IconBase>
)

ICError.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICError.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICError
