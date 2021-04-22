import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const sessionID = Cookies.get('cf-session')

const apiRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: { Accept: 'application/json' }
})

apiRequest.interceptors.request.use(function (config) {
  if (sessionID) {
    config.headers.common.token = sessionID
  }
  return config
})

apiRequest.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const { response } = error
    // toast(error.message)
    return response
    //throw response
  }
)

export default apiRequest
