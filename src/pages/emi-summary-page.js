import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import useToggleState from 'hooks/useToggleState'
import useAPIHook from 'hooks/useApiStates'

import { getEmiPlans, selectEmiPlan } from 'api/application'

import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import SectionDivider from 'components/elements/SectionDivider'
import FullPageCircleLoader from 'components/elements/loaders/FullPageCircleLoader'

import Header from 'components/application-flow/Header'
import EmiPlanSelectedCard from 'components/application-flow/emi/EmiPlanSelectedCard'
import EmiPlanSelectionView from 'components/application-flow/emi/EmiPlanSelectionView'
import PartyCard from 'components/application-flow/PartyCard'
import StartKycCard from 'components/application-flow/kyc/StartKycCard'

import { section } from 'styles/base/page.module.scss'
import { mt20, flex1 } from 'styles/base/utils.module.scss'

const HeaderBar = () => <Header title="EMI Payment"></Header>

const EmiSummaryPage = () => {
  const { push } = useRouter()
  const [plan, setPlan] = useState(null)
  const { isOpen, onToggle } = useToggleState()
  const { request: requestPlans, data: emiPlansData, loading: emiPlansLoading } = useAPIHook()
  const { request: requestSelectPlan, data, loading: updatePlanLoading } = useAPIHook()

  useEffect(() => {
    requestPlans(() => getEmiPlans())
  }, [])

  const onPlanSelect = (planIndex) => {
    const plan = emiPlansData.emiPlans[planIndex]
    setPlan(planIndex)
    requestSelectPlan(() =>
      selectEmiPlan({ merchantId: emiPlansData.merchantId, selectedPlan: plan })
    )
  }

  useEffect(() => {
    if (data) {
      onToggle()
    }
  }, [data])

  const onConfirmPayment = () => {
    push('/terms-and-conditions')
  }

  if (emiPlansLoading || updatePlanLoading) {
    const title = emiPlansLoading ? 'fetching plans' : 'updating plan'
    return <FullPageCircleLoader title={title} />
  }

  if (emiPlansData) {
    const { emiPlans, merchantName, merchantLogo, amount } = emiPlansData
    return (
      <ApplicationFlowLayout headerBar={<HeaderBar />}>
        <section className={`${section} ${flex1}`}>
          <PartyCard title={merchantName} subtitle={amount} icon={merchantLogo} />
          <div className={mt20}>
            <SectionDivider />
          </div>

          {!isOpen && (
            <div className={mt20}>
              <EmiPlanSelectionView
                selectedPlanIndex={plan}
                emiPlans={emiPlans}
                onPlanSelect={onPlanSelect}
              />
            </div>
          )}

          {isOpen && (
            <>
              <div className={mt20}>
                <EmiPlanSelectedCard
                  plan={emiPlans[plan]}
                  repaymentData={data.repaymentSchedule}
                  toggleSelectionView={onToggle}
                />
                <div className={mt20}>
                  <SectionDivider />
                </div>
              </div>
              <StartKycCard onConfirmPayment={onConfirmPayment} />
            </>
          )}
        </section>
      </ApplicationFlowLayout>
    )
  }
  return null
}

export default EmiSummaryPage
