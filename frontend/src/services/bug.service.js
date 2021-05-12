import axios from 'axios'
import config from '../config'

export const getBugList = () => {
  return axios.get(config.BACKEND + '/bugs').then((res) => {
    return res.data
  })
}

export const updateBug = (bugID, content) => {

}