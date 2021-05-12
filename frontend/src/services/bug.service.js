import axios from 'axios'
import config from '../config'

export const getBugList = () => {
  return axios.get(config.BACKEND + '/bugs').then((res) => {
    return res.data
  })
}

export const getCustomerList = () => {
  return axios.get(config.BACKEND + '/customers').then((res) => {
    return res.data
  })
}

export const getStaffList = () => {
  return axios.get(config.BACKEND + '/staffs').then((res) => {
    return res.data
  })
}