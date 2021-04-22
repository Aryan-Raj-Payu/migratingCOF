import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const { pathname, events } = useRouter()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const loadUserFromCookies = () => {
    const token = Cookies.get('token')
    if (token) {
      if (user) setUser(user)
    }
    setLoading(false)
  }
  useEffect(() => {
    loadUserFromCookies()
  }, [])

  const login = async (email, password) => {
    //api
    if (token) {
      Cookies.set('token', token, { expires: 60 })
    }
  }

  const logout = (email, password) => {
    Cookies.remove('token')
    setUser(null)
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading || (!isAuthenticated && window.location.pathname !== '/login')) {
    return <LoadingScreen />
  }
  return children
}
