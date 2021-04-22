import PropTypes from 'prop-types'

import BaseModal from 'components/elements/BaseModal'
import Button from 'components/elements/Button'

import { mt10, mt20 } from 'styles/base/utils.module.scss'
import {
  modalHeader,
  modalHeaderTitle,
  modalBody,
  modalBodySecondaryText,
  modalSizeSmall
} from 'styles/elements/modal.module.scss'

const EmiOfferModal = ({ submitActionHandler, closeHandler }) => {
  return (
    <BaseModal showCloseIcon={true} closeHandler={closeHandler} size={modalSizeSmall}>
      <>
        <div className={modalHeader}>
          <span className={modalHeaderTitle}>
            Do you really want to miss out on this EMI offer?
          </span>
        </div>
        <div className={modalBody}>
          <span className={modalBodySecondaryText}>Take a moment & think again.</span>
          <div className={mt20}>
            <Button
              size="Large"
              variant="Primary"
              width="mobileWidthFull"
              onClick={submitActionHandler}>
              I want this EMI offer
            </Button>
          </div>
          <div className={mt10}>
            <Button size="Large" variant="Link" width="mobileWidthFull" onClick={closeHandler}>
              I don’t want this EMI offer
            </Button>
          </div>
        </div>
      </>
    </BaseModal>
  )
}

EmiOfferModal.propTypes = {
  submitActionHandler: PropTypes.func,
  closeHandler: PropTypes.func
}

export default EmiOfferModal
