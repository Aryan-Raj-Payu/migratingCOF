import PropTypes from 'prop-types'

import Button from 'components/elements/Button'
import ICCross from 'components/icons/ICCross'

import { modal, modalContainer, closeIcon } from 'styles/elements/modal.module.scss'

const BaseModal = ({ children, showCloseIcon, closeHandler, size }) => {
  return (
    <div className={`${modal}`}>
      <div className={`${modalContainer} ${size}`}>
        {showCloseIcon && (
          <div className={closeIcon}>
            <Button size="ExtraSmall" variant="Link" onClick={closeHandler}>
              <ICCross iconColor="#999999" />
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

BaseModal.defaultProps = {
  showCloseIcon: false
}

BaseModal.propTypes = {
  showCloseIcon: PropTypes.bool,
  size: PropTypes.string,
  closeHandler: PropTypes.func,
  children: PropTypes.any
}

export default BaseModal
