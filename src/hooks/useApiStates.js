import { useState } from 'react'

const useApi = () => {
  const [data, setData] = useState(null)
  const [errorMsg, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async (func) => {
    try {
      setLoading(true)
      const response = await func()
      setData(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  return { data, error: errorMsg, loading, request }
}

export default useApi
