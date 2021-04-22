import PropTypes from 'prop-types'
import { headerbar } from 'styles/elements/header.module.scss'

const BaseHeader = ({ children }) => {
  return <header className={headerbar}>{children}</header>
}

BaseHeader.propTypes = {
  children: PropTypes.any
}

export default BaseHeader
