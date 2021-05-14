import axios from 'axios'
import config from '../config'
import { killBug } from './bug.service'

export const getPeopleList = () => {
  return axios.get(config.BACKEND + '/people').then((res) => {
    return res.data
  })
}

const addPerson = (role, username, password, name) => {
  return axios.post(config.BACKEND + '/people', {
    name, role, username, password
  }).then((res) => res.data)
}

export const addUser = (username, password, name) => {
  return addPerson('user', username, password, name)
}

export const addStaff = (username, password, name) => {
  return addPerson('staff', username, password, name)
}

export const deletePerson = (id, bugList) => {
  const promises = bugList.map(bug => killBug(bug.id))
  return Promise.all(promises).then(() => axios.delete(config.BACKEND + '/people/' + id))
}

export const updatePerson = (id, name, role, username, password) => {
  return axios.patch(config.BACKEND + '/people/' + id, {
    name, role, username, password
  })
}