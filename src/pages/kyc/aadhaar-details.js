import { useState } from 'react'

import ApplicationFlowLayout from 'layouts/ApplicationFlowLayout'
import Button from 'components/elements/Button'
import AadhaarInput from 'components/elements/inputs/AadhaarInput'
import Header from 'components/application-flow/Header'
import CKYCRecordStates from 'components/application-flow/kyc/CKYCRecordStates'

import { section } from 'styles/base/page.module.scss'
import { mt20 } from 'styles/base/utils.module.scss'
import { title, subTitle } from 'styles/pages/aadhaar-details.module.scss'

const HeaderBar = () => (
  <Header
    title="Complete your KYC"
    backRoute
    backRouteUrl="/application-summary"
    showLpLogo={false}></Header>
)

const AadhaarDetails = () => {
  const [aadhaarNo, setAadhaar] = useState()
  const [showLoading, setLoading] = useState()
  const aadhaarHandler = (value) => {
    setAadhaar(value)
  }
  const onContinueHandler = () => {
    setLoading(true)
  }

  if (showLoading) {
    return <CKYCRecordStates title="Searching for your C-KYC record..." imageName="search-ckyc" />
  }
  if (!showLoading) {
    return (
      <ApplicationFlowLayout headerBar={<HeaderBar />}>
        <section className={section}>
          <img src="/images/aadhaar-front.png" alt="aadhaar-front" width="100" />
          <div className={mt20}>
            <div className={title}>Need Aadhaar details to find your C-KYC record</div>
          </div>
          <div className={mt20}>
            <div className={subTitle}>
              We could not find your C-KYC record using PAN details. Let’s try using your Aadhaar
              details
            </div>
          </div>
          <div className={mt20}>
            <AadhaarInput onChangeValue={aadhaarHandler} />
          </div>
        </section>
        <section className={section}>
          <Button
            variant="Primary"
            size="Large"
            width="mobileWidthFull"
            disabled={!aadhaarNo || aadhaarNo.length !== 4}
            onClick={onContinueHandler}>
            Continue
          </Button>
        </section>
      </ApplicationFlowLayout>
    )
  }
}

export default AadhaarDetails
