import { API } from './auth'
import { killBug } from './bug'

export const getPeopleList = () => {
  return API.get('/people').then((res) => {
    return res.data
  })
}

const addPerson = (role, username, password, name) => {
  return API.post('/people', {
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
  return Promise.all(promises).then(() => API.delete('/people/' + id))
}

export const updatePerson = (id, name, role, username, password) => {
  return API.patch('/people/' + id, {
    name, role, username, password
  })
}