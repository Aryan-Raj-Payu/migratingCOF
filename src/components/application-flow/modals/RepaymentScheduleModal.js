import PropTypes from 'prop-types'

import BaseModal from 'components/elements/BaseModal'
import Button from 'components/elements/Button'
import SectionDivider from 'components/elements/SectionDivider'

import EmiPlanSelectedCard from 'components/application-flow/emi/EmiPlanSelectedCard'

import { mtAuto, mt20 } from 'styles/base/utils.module.scss'
import { modalBody, modalSizeFullPageMobile } from 'styles/elements/modal.module.scss'
import {
  timestampContainer,
  timelineTitle,
  positionRelative,
  verticalTimeline,
  circle,
  contentContainer,
  title,
  content
} from 'styles/elements/timeline.module.scss'

const RepaymentScheduleModal = ({ plan, repaymentData, submitActionHandler, closeHandler }) => {
  return (
    <BaseModal showCloseIcon={true} closeHandler={closeHandler} size={modalSizeFullPageMobile}>
      <div className={modalBody}>
        <EmiPlanSelectedCard plan={plan} showActions={false} />
        <div className={mt20}>
          <SectionDivider />
        </div>
        <div className={timestampContainer}>
          <div className={timelineTitle}>Repayment Schedule</div>

          <div className={positionRelative}>
            <div className={verticalTimeline} />
            <ul>
              {repaymentData.map(({ amount, dueDate }, index) => (
                <li key={index}>
                  <div className={circle} />
                  <div className={contentContainer}>
                    <div className={title}>₹ {amount}</div>
                    <div className={content}>{dueDate}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={mtAuto}>
          <Button
            size="Large"
            variant="Primary"
            width="mobileWidthFull"
            onClick={submitActionHandler}>
            Okay, understood
          </Button>
        </div>
      </div>
    </BaseModal>
  )
}

RepaymentScheduleModal.propTypes = {
  submitActionHandler: PropTypes.func,
  closeHandler: PropTypes.func,
  repaymentData: PropTypes.array,
  plan: PropTypes.object
}

export default RepaymentScheduleModal
