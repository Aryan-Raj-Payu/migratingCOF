import { SEND_OTP, RESEND_OTP, VALIDATE_OTP } from 'helpers/api'
import apiRequestHandler from 'helpers/apiRequestHandler'

export const sendOTP = ({ phone }) => {
  return apiRequestHandler.post(SEND_OTP, { number: phone })
}

export const resendOTP = ({ phone }) => {
  return apiRequestHandler.post(RESEND_OTP, { number: phone })
}

export const validateOTP = ({ phone, otpCode }) => {
  return apiRequestHandler.post(VALIDATE_OTP, { number: phone, otp: otpCode })
}
