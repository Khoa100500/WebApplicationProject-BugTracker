import axios from 'axios'
import config from './config'

export const login = (username, password) => {
  return axios
    .post(config.BACKEND + '/api/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

export const logout = () => {
  localStorage.removeItem('user');
}

export const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken }
  } else {
    return {}
  }
}