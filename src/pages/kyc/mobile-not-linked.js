import { useRouter } from 'next/router'

import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Button from 'components/elements/Button'
import Header from 'components/application-flow/Header'

import { section } from 'styles/base/page.module.scss'
import { mxAuto, mt10, mt20, flex1 } from 'styles/base/utils.module.scss'
import {
  btnPosition,
  container,
  title,
  subtitle,
  image
} from 'styles/pages/mobile-not-linked.module.scss'

const HeaderBar = () => (
  <Header
    title="Complete your KYC"
    backRoute
    backRouteUrl="/kyc/aadhaar-details"
    showLpLogo={false}
  />
)

const MobileNotLinked = () => {
  const { push } = useRouter()
  const resumeKYC = () => push('/kyc/aadhaar-verification')

  const goBackToMerhcant = () => {}
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <div className={container}>
        <img
          className={image}
          src="/images/link-mobile-with-aadhaar.png"
          alt="link-mobile-with-aadhaar"
          height="153"
        />
        <section className={`${section} ${flex1}`}>
          <div className={title}>
            Link your mobile number with Aadhaar to complete the online KYC
          </div>
          <div className={`${subtitle} ${mt20}`}>
            Please visit your nearest Aadhaar center to update your mobile number. Once you have
            done this, you can return to the app and complete this step.
          </div>
          <div className={btnPosition}>
            <Button size="Large" variant="Primary" onClick={resumeKYC} width="mobileWidthFull">
              Resume KYC using Aadhaar
            </Button>
          </div>
          <div className={`${mxAuto} ${mt10} `}>
            <Button size="Large" variant="Link" onClick={goBackToMerhcant}>
              Go back to Policyboss
            </Button>
          </div>
        </section>
      </div>
    </ApplicationFlowLayout>
  )
}

export default MobileNotLinked
