import { createContext, useState, useEffect, useContext } from 'react'
import { API } from '../utils'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const history = useHistory()
  const [user, setUser] = useState({
    id: undefined,
    role: undefined,
    name: undefined,
    username: undefined,
    accessToken: undefined
  })
  const [loading, setLoading] = useState(true)
  const [interceptor, setInterceptor] = useState()

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem('user'))
    if (_user && _user.accessToken) {
      setAuthToken(_user.accessToken)
      setUser(_user)
    }
    API.interceptors.response.use(
      res => res,
      err => {
        if (err.response.status === 403) {
          alert('Your authentication token is expired. Please login again.')
          logout()
        } else {
          throw err;
        }
      }
    )
    setLoading(false)
  }, [])

  const login = async (username, password) => {
    const response = await API.post('/login', {
      username,
      password,
    })
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data))
      setAuthToken(response.data.accessToken)
      setUser(response.data)
    }
  }

  const logout = () => {
    setUser({
      id: undefined,
      role: undefined,
      name: undefined,
      username: undefined,
      accessToken: undefined,
    })
    API.interceptors.request.eject(interceptor)
    localStorage.removeItem('user');
    history.push('/login')
  }

  const setAuthToken = (token) => {
    setInterceptor(
      API.interceptors.request.use((config => {
        config.headers = { 'x-access-token': token }
        return config
      }))
    )
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}