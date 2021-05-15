import axios from 'axios'
import { useContext } from 'react'
import config from '../config'
import { GlobalContext } from '../context/GlobalContext'
import { Route, Redirect } from 'react-router-dom'

export const API = axios.create({
  baseURL: config.BACKEND
})

export const login = (username, password) => {
  return API
    .post('/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
        useContext(GlobalContext).setUser(response.data)
        setAuthToken(response.data.accessToken)
      }
      return response.data
    })
}

export const logout = () => {
  localStorage.removeItem('user');
}

export const setAuthToken = (token) => {
  API.interceptors.request.use((config => {
    config.headers = { 'x-access-token': token }
    return config
  }))
}

export const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}