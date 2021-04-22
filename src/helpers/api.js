// OTP
export const SEND_OTP = 'api/lazypay/otp'
export const RESEND_OTP = 'api/lazypay/resendOtp'
export const VALIDATE_OTP = 'api/lazypay/validateOtp'

// Eligibility
export const ELIGIBILITY = 'api/lazypay/cof/v0/confirm-redirect'

// EMI
export const GET_EMI_PLANS = 'api/lazypay/cof/plan-summary'
export const SELECT_EMI_PLAN = 'api/lazypay/cof/select-plan?kycDetails=false'

// KYC
export const GET_KYC_STATUS = 'api/lazypay/kyc/kycStatus?product=COF'

// MITC statuses
export const CHECK_MITC_STATUS = '/api/lazypay/mitc/check-mitc-status'
export const GET_TERMS_CONDITIONS = '/api/lazypay/mitc/termsAndConditions'

// Payment Success
export const PAYMENT_SUCCESS = '/api/lazypay/cof/payment-success?signMitc=true'
