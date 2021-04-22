import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import useToggleState from 'hooks/useToggleState'
import useRadioState from 'hooks/useRadioState'

import Button from 'components/elements/Button'
import RadioInput from 'components/elements/inputs/RadioInput'
import ICArrowCavetDown from 'components/icons/ICArrowCavetDown'
import ICArrowCavetUp from 'components/icons/ICArrowCavetUp'

import {
  title,
  emiContainer,
  emiInput,
  rate as rateStyle,
  amount as amountStyle,
  noEmi,
  active,
  divider
} from 'styles/application-flow/components/emi-plan-select.module.scss'
import { mt20 } from 'styles/base/utils.module.scss'

const EmiPlanSelectionView = ({ selectedPlanIndex, emiPlans, onPlanSelect }) => {
  const { isOpen, onToggle } = useToggleState()
  const { radioValue, handleRadioChange } = useRadioState(selectedPlanIndex)

  const [firstVisiblePlans, setfirstVisiblePlans] = useState([])
  const [otherPlans, setOtherPlans] = useState([])

  useEffect(() => {
    if (emiPlans) {
      const plans = emiPlans
      setfirstVisiblePlans(plans.slice(0, 3))
      setOtherPlans(plans.slice(3))
    }
  }, [emiPlans])

  const selectPlan = () => {
    onPlanSelect(radioValue)
  }
  return (
    <>
      <div className={title}>Select EMI Plan</div>
      <div className={`${mt20} ${emiContainer}`}>
        {firstVisiblePlans.map((plan, index) => (
          <EmiPlanBox
            key={index}
            selectedPlan={radioValue}
            plan={plan}
            index={index}
            onRadioSelect={handleRadioChange}
          />
        ))}
        {isOpen &&
          otherPlans.map((plan, index) => (
            <EmiPlanBox
              key={index}
              selectedPlan={radioValue}
              plan={plan}
              index={index + 3}
              onRadioSelect={handleRadioChange}
            />
          ))}
        <div className={mt20}>
          <Button size="Medium" variant="Link" onClick={onToggle}>
            See {isOpen ? 'less' : 'more'} plans
            <span>{getArrowIcon(isOpen)}</span>
          </Button>
        </div>
        <div className={mt20}>
          <Button
            size="Large"
            variant="Primary"
            width="mobileWidthFull"
            disabled={!radioValue}
            onClick={selectPlan}>
            Select Plan
          </Button>
        </div>
      </div>
    </>
  )
}

EmiPlanSelectionView.propTypes = {
  emiPlans: PropTypes.array,
  onPlanSelect: PropTypes.func,
  selectedPlanIndex: PropTypes.string
}

export default EmiPlanSelectionView

const getArrowIcon = (isOpen) => {
  const iconColor = '#ee3362'
  const size = '20'
  return isOpen ? (
    <ICArrowCavetUp iconColor={iconColor} width={size} height={size} />
  ) : (
    <ICArrowCavetDown iconColor={iconColor} width={size} height={size} />
  )
}

const EmiPlanBox = ({ selectedPlan, plan = {}, onRadioSelect, index }) => {
  const { amount, interestRate, tenure } = plan
  const isActivePlan = selectedPlan && Number(selectedPlan) === index
  return (
    <>
      <div key={index} className={`${emiInput} ${isActivePlan ? active : ''}`}>
        <RadioInput name="plan" value={index} onChange={onRadioSelect} checked={!!isActivePlan} />
        <div className={amountStyle}>
          ₹ {amount} for {tenure} months
        </div>
        {interestRate && <div className={rateStyle}>@ {interestRate}% p.a</div>}
        {!interestRate && <div className={noEmi}>No Cost EMI </div>}
      </div>
      <div className={divider}></div>
    </>
  )
}

EmiPlanBox.propTypes = {
  plan: PropTypes.object,
  onRadioSelect: PropTypes.func,
  selectedPlan: PropTypes.string,
  index: PropTypes.number
}
