import { createContext, useEffect, useContext, useReducer } from 'react'
import { API } from '../utils'
import AuthReducer, { initialState } from './AuthReducer'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch({
        type: 'LOAD_USER', user
      })
    } else {
      dispatch({
        type: 'RENDER_CHILDREN'
      })
    }
    API.interceptors.response.use(
      res => res,
      err => {
        if (err.response.status === 403) {
          alert('Your authentication token is expired. Please login again.')
          dispatch({
            type: 'LOG_OUT'
          })
        } else {
          throw err
        }
      }
    )
  }, [])


  const login = async (username, password) => {
    const user = (await API.post('/login', {
      username,
      password,
    })).data
    if (user.id) {
      dispatch({
        type: 'LOAD_USER', user
      })
    }
  }

  const logout = () => {
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