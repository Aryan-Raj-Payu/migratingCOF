import PropTypes from 'prop-types'

import useToggleState from 'hooks/useToggleState'

import Button from 'components/elements/Button'
import ICTickCircle from 'components/icons/ICTickCircle'

import RepaymentScheduleModal from 'components/application-flow/modals/RepaymentScheduleModal'

import { fwRegular } from 'styles/base/utils.module.scss'

import {
  container,
  titleContainer,
  title,
  changeEmiAction,
  planDetailsContainer,
  planInfo,
  rateInfo,
  repaymentAction,
  noEmi
} from 'styles/application-flow/components/emi-plan-selected.module.scss'

const EmiPlanSelectedCard = ({ plan, showActions, toggleSelectionView, repaymentData }) => {
  const { isOpen, onToggle } = useToggleState()
  const { amount, tenure, interestRate } = plan
  return (
    <div className={container}>
      <div className={titleContainer}>
        <ICTickCircle />
        <span className={title}>EMI Plan Selected</span>
        {showActions && (
          <div className={changeEmiAction}>
            <Button size="Small" variant="Link" onClick={toggleSelectionView}>
              Change Plan
            </Button>
          </div>
        )}
      </div>
      <div className={planDetailsContainer}>
        <span className={planInfo}>
          ₹ {amount} for {tenure} months
        </span>
        {interestRate && <div className={rateInfo}> @ {interestRate}% p.a </div>}
        {!interestRate && <div className={noEmi}>No Cost EMI </div>}
      </div>
      {showActions && (
        <div className={repaymentAction}>
          <Button size="ExtraSmall" variant="LinkBlack" onClick={onToggle}>
            <div className={fwRegular}>Repayment schedule</div>
          </Button>
        </div>
      )}
      {isOpen && (
        <RepaymentScheduleModal
          repaymentData={repaymentData}
          plan={plan}
          submitActionHandler={onToggle}
          closeHandler={onToggle}
        />
      )}
    </div>
  )
}

EmiPlanSelectedCard.defaultProps = {
  showActions: true,
  plan: {}
}
EmiPlanSelectedCard.propTypes = {
  showActions: PropTypes.bool,
  plan: PropTypes.object,
  toggleSelectionView: PropTypes.func
}

export default EmiPlanSelectedCard
