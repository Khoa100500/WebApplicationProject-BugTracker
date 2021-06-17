import { createContext, useEffect, useContext, useReducer, useState } from 'react'
import { API } from '../utils'
import AuthReducer, { initialState } from './AuthReducer'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const [resInterceptor, setResInterceptor] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch({
        type: 'LOAD_USER', user
      })
      setResInterceptor(API.interceptors.response.use(
        res => res,
        err => {
          if (err.response.status === 401) {
            alert('Your authentication token is expired. Please login again.')
            dispatch({
              type: 'LOG_OUT'
            })
          }
          return Promise.reject(err)
        }
      ))
    } else {
      dispatch({
        type: 'RENDER_CHILDREN'
      })
    }
    return () => {
      API.interceptors.response.eject(resInterceptor)
    }
  }, [])


  const login = async (username, password) => {
    const response = await API.post('/login', {
      username,
      password
    })
    const user = response.data
    if (user.id) {
      dispatch({
        type: 'LOAD_USER', user
      })
    }
  }

  const logout = () => {
    API.interceptors.response.eject(resInterceptor)
    dispatch({
      type: 'LOG_OUT'
    })
  }

  return (
    <AuthContext.Provider value={{
      user: state.user,
      login,
      logout
    }}>
      {state.renderChildren && children}
    </AuthContext.Provider>
  )
}