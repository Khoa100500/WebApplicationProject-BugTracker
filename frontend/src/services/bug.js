import { API } from '../utils'

const bugAPI = {}

bugAPI.getBugList = async () => {
  const res = await API.get('/bugs')
  return res?.data
}

bugAPI.addBug = async (bug) => {
  const res = await API.post('/bugs', bug)
  return res?.data
}

bugAPI.updateBug = async (bug) => {
  await API.patch('/bugs/' + bug.id, bug)
}

bugAPI.forwardBug = async (bug, staffID) => {
  await API.patch('/bugs/' + bug.id, { staffID })
  await bugAPI.updateBug(bug)
}

bugAPI.killBug = async (id) => {
  await API.delete('/bugs/' + id)
}

export default bugAPI