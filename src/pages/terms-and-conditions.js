import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import useCheckboxState from 'hooks/useCheckboxState'
import useAPIHook from 'hooks/useApiStates'

import { checkMitcStatus, getTermsAndConditions } from 'api/application'

import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Button from 'components/elements/Button'
import CheckboxInput from 'components/elements/inputs/CheckboxInput'
import FullPageCircleLoader from 'components/elements/loaders/FullPageCircleLoader'

import Header from 'components/application-flow/Header'

import { section, fixedfooterContainer, flexScrollContainer } from 'styles/base/page.module.scss'
import { mt20 } from 'styles/base/utils.module.scss'
import {
  stepText,
  title,
  subTitle,
  userDetailsContainer,
  userInfo,
  profileImg,
  profileInfo,
  name,
  pan,
  fieldsContainer,
  fieldBox,
  label,
  value,
  step2Container,
  primaryText,
  secondaryText,
  checkboxContainer,
  labelTitle
} from 'styles/pages/terms-conditon.module.scss'

const userData = [
  { key: 'dob', displayName: 'Date of birth' },
  { key: 'gender', displayName: 'Gender' },
  { key: 'fatherName', displayName: 'Father’s Name' },
  { key: 'motherName', displayName: 'Mother’s Name' },
  { key: 'employmentType', displayName: 'Employment type' },
  { key: 'creditLimit', displayName: 'Credit limit' },
  { key: 'mobileNo', displayName: 'Mobile number' },
  { key: 'email', displayName: 'Email address' },
  { key: 'permanentAddress', displayName: 'Permanent Address' },
  { key: 'currentAddress', displayName: 'Current Address' }
]

const HeaderBar = () => (
  <Header
    title="Terms and Conditions"
    backRoute
    backRouteUrl="emi-summary-page"
    icon="cross"
    showLpLogo={false}
  />
)

const TermsAndConditons = () => {
  const { push } = useRouter()
  const { checked, handleChange } = useCheckboxState('typeSingle', false)
  const [step, setStep] = useState(1)

  const { request: requestMitcStatus, data: mitcStatusData, loading: mitcLoading } = useAPIHook()
  const { request, data, loading: fetchingData } = useAPIHook()

  useEffect(() => {
    requestMitcStatus(() => checkMitcStatus({ mobile: '9821788711' }))
  }, [])

  useEffect(() => {
    if (mitcStatusData) {
      mitcStatusData.isSigned ? push('payment-success') : request(() => getTermsAndConditions())
    }
  }, [mitcStatusData])

  const onAcceptContinueAction = () => {
    setStep(2)
    if (step === 2) {
      push('payment-success')
    }
  }

  if (mitcLoading || fetchingData) {
    return <FullPageCircleLoader title="Please wait..." />
  }

  const renderData = ({ key, value }) => (
    <div className={fieldBox}>
      <span className={label}>{key}</span>
      <span className={value}>{value}</span>
    </div>
  )

  if (data) {
    return (
      <ApplicationFlowLayout headerBar={<HeaderBar />}>
        <section className={section}>
          <img src="/images/terms-and-conditions.png" alt="terms" width="80" height="80" />
          <div className={mt20}>
            <div className={stepText}>Step {step}/2</div>
            <div className={title}>Accept the Terms and Conditions to pay through LazyPay EMI </div>
            <div className={subTitle}>We will also send the document on your email.</div>
          </div>
        </section>
        <section className={flexScrollContainer}>
          <div className={userDetailsContainer}>
            {step == 1 && (
              <>
                <div className={userInfo}>
                  <div className={profileImg}>
                    <img src="" />
                  </div>
                  <div className={profileInfo}>
                    <span className={name}>{data.name}</span>
                    <span className={pan}>PAN Number : {data.pan}</span>
                  </div>
                </div>
                <div className={mt20}>
                  <div className={fieldsContainer}>
                    {userData.map(({ key, displayName }) => (
                      <div key={key} className={fieldBox}>
                        <span className={label}>{displayName}</span>
                        <span className={value}>{data[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {step == 2 && (
              <div className={step2Container}>
                <p className={primaryText}>
                  Please read carefully before confirming your acceptance
                </p>
                <p className={secondaryText}>
                  I refer to Application Form filed by me for availing the LazyPlus facility
                  (“Facility”) from PayU Finance India Private Limited (as the Lender). I confirm
                  that I have applied for the Facility and irrevocably and unconditionally accept
                  and confirm the following:
                </p>
              </div>
            )}
          </div>
        </section>
        <div className={fixedfooterContainer}>
          {step == 2 && (
            <div className={checkboxContainer}>
              <CheckboxInput name="mitc" checked={checked} onChange={handleChange} />
              <span className={labelTitle}>
                I accept: (a) the above mentioned Most Important Terms and Conditions and (b) the
                General Terms and Conditions.
              </span>
            </div>
          )}
          <Button
            variant="Primary"
            size="Large"
            width="mobileWidthFull"
            onClick={onAcceptContinueAction}
            disabled={step == 2 && !checked}>
            Accept and continue
          </Button>
        </div>
      </ApplicationFlowLayout>
    )
  }
  return null
}

export default TermsAndConditons
