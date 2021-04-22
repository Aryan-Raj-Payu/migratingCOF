import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useAPIHook from 'hooks/useApiStates'

import { resendOTP, validateOTP } from 'api/auth'

import Button from 'components/elements/Button'
import OtpInput from 'components/elements/inputs/OtpInput'

import { section } from 'styles/base/page.module.scss'
import { title, subTitle, footer, subText } from 'styles/pages/otp-verification.module.scss'

const OTP_INPUT_LENGTH = 4

const OtpScreen = () => {
  const { push } = useRouter()

  const { request: resendOTPCall } = useAPIHook()
  const { loading: verifyOTPLoader, data: verifyOTPData, request: verifyOTPCall } = useAPIHook()
  const [otp, setOTP] = useState([])

  const otpHandler = (value) => {
    setOTP(value)
  }

  const resendOTPHandler = () => {
    resendOTPCall(() => resendOTP({ phone: '+919821788711' }))
  }

  const verifyOTP = async () => {
    // await verifyOTPCall(() => validateOTP({ phone: '+919821788711', otpCode: otp }))
    // if (verifyOTPData) push('/emi-plan')
    push('/emi-summary-page')
  }

  const isButtonEnabled = () => otp.length === OTP_INPUT_LENGTH

  return (
    <>
      <section className={section}>
        <div className={title}>Enter OTP to view your EMI plans</div>
        <div className={subTitle}>OTP is sent on 9090888821</div>
        {verifyOTPLoader && 'validation otp'}
        <OtpInput
          numberofInputs={OTP_INPUT_LENGTH}
          resendOTPHandler={resendOTPHandler}
          onChangeValue={otpHandler}
        />
      </section>
      <div className={footer}>
        <section className={section}>
          <Button variant="Primary" size="Large" disabled={!isButtonEnabled()} onClick={verifyOTP}>
            Show me EMI Plans
          </Button>
          <div className={subText}>By continuing, I agree to Privacy Policy and T&C</div>
        </section>
      </div>
    </>
  )
}

export default OtpScreen
