import apiRequestHandler from 'helpers/apiRequestHandler'

import {
  ELIGIBILITY,
  GET_EMI_PLANS,
  SELECT_EMI_PLAN,
  CHECK_MITC_STATUS,
  GET_TERMS_CONDITIONS,
  PAYMENT_SUCCESS
} from 'helpers/api'

export const getEligibility = async () => {
  let response = await apiRequestHandler.get(ELIGIBILITY)
  response.data = {
    is_eligible: true,
    back_url: 'https://policyboss/checkout'
  }
  return response
}

export const getEmiPlans = async () => {
  let response = await apiRequestHandler.get(GET_EMI_PLANS)
  response.data = {
    merchantId: 2,
    merchantName: 'Policy Boss Health Insurance',
    merchantLogo: 'https://www.policyboss.com/Images/PB.png',
    amount: 6000,
    emiPlans: [
      {
        amount: 300,
        interestRate: 9,
        tenure: 3
      },
      {
        amount: 200,
        interestRate: 12,
        tenure: 12
      },
      {
        amount: 500,
        interestRate: null,
        tenure: 6
      },
      {
        amount: 800,
        interestRate: 5,
        tenure: 9
      },
      {
        amount: 400,
        interestRate: 18,
        tenure: 5
      }
    ]
  }
  return response
}

export const selectEmiPlan = async ({ merchantId, selectedPlan }) => {
  let response = await apiRequestHandler.post(SELECT_EMI_PLAN, {
    merchantId: merchantId,
    selectedPlan: selectedPlan
  })
  response.data = {
    merchantId: merchantId,
    merchantName: 'Policy Boss',
    merchantLogo: '',
    amount: selectedPlan.amount,
    kycStatus: '',
    repaymentSchedule: [
      { amount: '100', dueDate: 'Due on 3 Dec, 2020' },
      { amount: '100', dueDate: 'Due on 3 Jan, 2021' },
      { amount: '100', dueDate: 'Due on 4 Feb, 2021' },
      { amount: '100', dueDate: 'Final payment. Due on 3 Feb, 2021' }
    ]
  }
  return response
}

export const checkMitcStatus = async ({ mobile }) => {
  let response = await apiRequestHandler.get(`${CHECK_MITC_STATUS}?mobile=${mobile}`)
  response.data = {
    isSigned: true
  }
  return response
}

export const getTermsAndConditions = async () => {
  let response = await apiRequestHandler.get(GET_TERMS_CONDITIONS)
  response.data = {
    name: 'Tanmay Prabhakar Shah',
    panNo: '******890P',
    dob: '04 January 1992',
    gender: 'Male',
    fatherName: 'Prabhakar Jagjit Shah',
    motherName: 'Veena Prabhakar Shah',
    employmentType: 'Salaried',
    creditLimit: '₹25,000',
    mobileNo: '9088448890',
    email: 'Tanmay1992@gmail.com',
    permanentAddress:
      '203, Sunshine Heights, Tilak Road, Near The Walkheart Hospital, Khar West, Mumbai 400045',
    currentAddress:
      '203, Sunshine Heights, Tilak Road, Near The Walkheart Hospital, Khar West, Mumbai 400045'
  }
  return response
}

export const paymentSuccess = async () => {
  let response = await apiRequestHandler.post(PAYMENT_SUCCESS)
  response.data = {
    amount: '5,197',
    merchantName: 'PolicyBoss',
    firstInstallment: 'First instalment of ₹1,732 will be due on Jan 03, 2020'
  }
  return response
}
