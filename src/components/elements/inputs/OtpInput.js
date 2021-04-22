import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/elements/Button'
import IconResendOtp from 'components/icons/IconResendOtp'
import TimerLoader from 'components/elements/loaders/TimerLoader'

import {
  otpInput as otpInputStyle,
  otpContainer,
  resendOtpContainer,
  timerLoader,
  text
} from 'styles/elements/inputs/otp-input.module.scss'

const arrayIntoString = (otpArray) => otpArray.join('')

const OtpInput = ({ numberofInputs, resendOTPHandler, onChangeValue }) => {
  const [otp, setOTP] = useState(new Array(numberofInputs).fill(''))
  const [waitingForOTPLoader, setwaitingForOTPLoader] = useState(true)

  const onClearTimer = () => setwaitingForOTPLoader(false)

  useEffect(() => {
    onChangeValue(arrayIntoString(otp))
  }, [otp])

  const handleChange = (element, index) => {
    const { value } = element
    if (isNaN(value)) return false
    setOTP([...otp.map((prevValue, idx) => (idx === index ? value : prevValue))])
    if (!value && element.previousSibling) {
      element.previousSibling.focus()
    }
    if (element.nextSibling && value) {
      element.nextSibling.focus()
    }
  }

  return (
    <>
      <div className={otpContainer}>
        {otp.map((data, index) => {
          return (
            <input
              type="text"
              key={index}
              name="otp"
              className={otpInputStyle}
              value={data}
              maxLength="1"
              onChange={(e) => handleChange(e.target, index)}
              autoComplete="off"
            />
          )
        })}
      </div>
      <div className={resendOtpContainer}>
        {waitingForOTPLoader && (
          <div className={timerLoader}>
            <TimerLoader seconds={30} onClearTimer={onClearTimer} />
            <span className={text}>waiting for otp...</span>
          </div>
        )}
        {!waitingForOTPLoader && (
          <Button variant="Icon" size="Small" textDecoration="underline" onClick={resendOTPHandler}>
            <IconResendOtp />
            <span>Resend OTP</span>
          </Button>
        )}
      </div>
    </>
  )
}

OtpInput.defaultProps = {
  numberofInputs: null,
  waitingForOTPLoader: false
}

OtpInput.propTypes = {
  numberofInputs: PropTypes.number,
  resendOTPHandler: PropTypes.func,
  waitingForOTPLoader: PropTypes.bool,
  onChangeValue: PropTypes.func
}

export default OtpInput
