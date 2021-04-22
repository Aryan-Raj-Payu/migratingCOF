import { useRouter } from 'next/router'

import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Button from 'components/elements/Button'
import Header from 'components/application-flow/Header'
import CKYCRecordStates from 'components/application-flow/kyc/CKYCRecordStates'

import { section } from 'styles/base/page.module.scss'
import { mt10, mt20, mAuto } from 'styles/base/utils.module.scss'
import { title, subTitle, footer, btnPosition } from 'styles/pages/aadhaar-verification.module.scss'

const HeaderBar = () => (
  <Header
    title="Complete your KYC"
    backRoute
    backRouteUrl="aadhaar-details"
    showLpLogo={false}></Header>
)

const AadhaarVerification = () => {
  const { push } = useRouter()
  const routeToMobileNotLink = () => push('/kyc/mobile-not-linked')
  return (
    <ApplicationFlowLayout headerBar={<HeaderBar />}>
      <CKYCRecordStates
        title="We couldn’t find your C-KYC record!"
        imageName="ckyc-not-found"
        position="top"
      />
      <div className={footer}>
        <section className={section}>
          <div className={mt20}>
            <div className={title}>Continue with Aadhaar verification</div>
          </div>
          <div className={mt10}>
            <div className={subTitle}>Be sure that your Aadhaar is linked to a mobile number.</div>
          </div>
          <div className={btnPosition}>
            <Button size="Large" variant="Primary">
              Verify Aadhaar via OTP
            </Button>
          </div>
          <div className={mAuto}>
            <Button size="Medium" variant="Link" onClick={routeToMobileNotLink}>
              Aadhaar not linked to mobile number?
            </Button>
          </div>
        </section>
      </div>
    </ApplicationFlowLayout>
  )
}

export default AadhaarVerification
