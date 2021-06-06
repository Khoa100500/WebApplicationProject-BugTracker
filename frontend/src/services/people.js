import { API } from '../utils'
import bugAPI from './bug'

const peopleAPI = {}

peopleAPI.getPeopleList = async () => {
  const res = await API.get('/people')
  return res?.data
}

peopleAPI.addPerson = async (person) => {
  const res = await API.post('/people', person)
  return res?.data
}

peopleAPI.deletePerson = async (id, bugList) => {
  const promises = bugList
    .filter(bug => bug.userID === id || bug.staffID === id)
    .map(bug => bugAPI.killBug(bug.id))
  await Promise.all(promises)
  await API.delete('/people/' + id)
}

peopleAPI.updatePerson = async (person) => {
  await API.patch('/people/' + person.id, person)
}

export default peopleAPI