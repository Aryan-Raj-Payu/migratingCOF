import React from 'react'
import PropTypes from 'prop-types'

import { main, contentContainer } from 'styles/base/page.module.scss'

export default function Layout({ children }) {
  return (
    <div className={main}>
      <div className={contentContainer}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}
