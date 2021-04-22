import PropTypes from 'prop-types'

export default function IconBase({ iconName, width, height, iconColor = '#222222', children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-labelledby={iconName}
      role="presentation">
      <title id="iconName" lang="en">
        {iconName} icon
      </title>
      <g fill={iconColor}>{children}</g>
    </svg>
  )
}

IconBase.defaultProps = {
  iconName: '',
  width: '24',
  height: '24',
  iconColor: '#222222'
}

IconBase.propTypes = {
  iconName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string,
  children: PropTypes.any
}
