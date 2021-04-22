import React from 'react'
import PropTypes from 'prop-types'

import BaseHeader from 'components/elements/BaseHeader'

import {
  main,
  headerbar as headerStyle,
  contentContainer,
  cardContainer
} from 'styles/base/page.module.scss'

export default function Layout({ headerBar, children }) {
  return (
    <div className={main}>
      {headerBar && (
        <div className={headerStyle}>{headerBar && <BaseHeader>{headerBar}</BaseHeader>}</div>
      )}
      <div className={contentContainer}>
        <div className={cardContainer}>{children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  headerBar: PropTypes.any,
  children: PropTypes.any
}
