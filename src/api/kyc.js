import { GET_KYC_STATUS } from 'helpers/api'
import apiRequestHandler from 'helpers/apiRequestHandler'

export const getKycStatus = async () => {
  let response = await apiRequestHandler.get(GET_KYC_STATUS)
  response.data = {
    kycStatus: 'YES'
  }
  return response
}
