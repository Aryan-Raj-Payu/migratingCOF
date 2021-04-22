import { useEffect } from 'react'
import ContentLoader from 'react-content-loader'

import useAPIHook from 'hooks/useApiStates'
import useCheckboxState from 'hooks/useCheckboxState'

import { getKycStatus } from 'api/kyc'

import Button from 'components/elements/Button'
import CheckboxInput from 'components/elements/inputs/CheckboxInput'
import ICTickCircle from 'components/icons/ICTickCircle'
import ICSecure from 'components/icons/ICSecure'

import {
  startKycCard,
  stepContainer,
  overlineTitle,
  title,
  checkboxContainer,
  labelTitle
} from 'styles/application-flow/components/start-kyc-card.module.scss'

import { mtAuto, mt20, ml10 } from 'styles/base/utils.module.scss'

const Loader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={204}
    viewBox="0 0 400 204"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect y="38" width="259" height="24" rx="4" fill="url(#paint0_linear)" />
    <rect y="74" width="109" height="8" rx="4" fill="url(#paint1_linear)" />
    <rect y="2" width="109" height="16" rx="4" fill="url(#paint2_linear)" />
    <rect y="106" width="328" height="48" rx="4" fill="url(#paint3_linear)" />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="4.82425e-07"
        y1="50"
        x2="253.078"
        y2="50"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6E6E6" />
        <stop offset="1" stopColor="#F7F7F7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="2.03028e-07"
        y1="78"
        x2="106.508"
        y2="78"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6E6E6" />
        <stop offset="1" stopColor="#F7F7F7" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="2.03028e-07"
        y1="10"
        x2="106.508"
        y2="10"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6E6E6" />
        <stop offset="1" stopColor="#F7F7F7" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="6.10947e-07"
        y1="130"
        x2="320.5"
        y2="130"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#E6E6E6" />
        <stop offset="1" stopColor="#F7F7F7" />
      </linearGradient>
    </defs>
  </ContentLoader>
)
const StartKycCard = ({ onConfirmPayment }) => {
  const { checked, handleChange } = useCheckboxState('typeSingle', false)
  const { request, data, loading } = useAPIHook()

  useEffect(() => {
    request(() => getKycStatus())
  }, [])

  return (
    <>
      {loading && <Loader />}
      {data && data.kycStatus === 'NO' && (
        <div className={mt20}>
          <div className={startKycCard}>
            <div className={stepContainer}>
              <ICTickCircle />
              <span className={ml10} />
              <div className={overlineTitle}>Identity Verification</div>
            </div>
            <div className={title}>Complete KYC in 2 minutes</div>
            <div className={checkboxContainer}>
              <CheckboxInput name="ckyc_consent" checked={checked} onChange={handleChange} />
              <span className={labelTitle}>By continuing I agree to C-KYC consent</span>
            </div>
            <div className={mt20}>
              <Button size="Large" variant="Primary" width="mobileWidthFull" disabled={!checked}>
                Start KYC
              </Button>
            </div>
            {false && <div className={title}>KYC completed successfully</div>}
          </div>
        </div>
      )}
      {data && data.kycStatus === 'YES' && (
        <div className={mtAuto}>
          <div className={mt20}>
            <Button
              variant="Primary"
              size="Large"
              width="mobileWidthFull"
              onClick={onConfirmPayment}>
              <ICSecure iconColor="#fff" /> <span>Confirm Payment</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default StartKycCard
