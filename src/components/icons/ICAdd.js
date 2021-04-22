import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICAdd = ({ width, height, iconColor }) => (
  <IconBase iconName="cavet-down" width={width} height={height} iconColor={iconColor}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </IconBase>
)

ICAdd.defaultProps = {
  width: '24',
  height: '24',
  iconColor: 'red'
}

ICAdd.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICAdd
