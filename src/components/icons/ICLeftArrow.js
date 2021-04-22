import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICLeftArrow = ({ width, height }) => (
  <IconBase iconName="camera" width={width} height={height} iconColor={'black'}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </IconBase>
)

ICLeftArrow.defaultProps = {
  width: '24',
  height: '24',
  iconColor: ''
}

ICLeftArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string
}

export default ICLeftArrow
