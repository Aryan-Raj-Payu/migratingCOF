import PropTypes from 'prop-types'
import IconBase from 'components/icons/IconBase'

const ICBackArrow = ({ width, height }) => (
  <IconBase iconName="camera" width={width} height={height} iconColor={'black'}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
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
