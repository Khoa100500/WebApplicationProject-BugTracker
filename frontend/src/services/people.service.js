import axios from 'axios'
import config from '../config'

export const getPeopleList = () => {
  return axios.get(config.BACKEND + '/people').then((res) => {
    return res.data
  })
}