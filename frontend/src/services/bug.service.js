import axios from 'axios'
import config from '../config'

const getCurrentTime = () => new Date().toJSON().slice(0, 19).replace('T', ' ')

export const getBugList = (id, role) => {
  if (role === 'admin') {
    return axios.get(config.BACKEND + '/bugs').then((res) => {
      return res.data
    })
  } else {
    return axios.get(config.BACKEND + '/bugs?staffID=' + id).then((res) => {
      return res.data
    })
  }
}

export const addBug = (authorID, title, description, userID, staffID) => {
  return axios.post(config.BACKEND + '/bugs', {
    title,
    description,
    userID: userID,
    staffID: staffID,
    updates: [
      {
        time: getCurrentTime(),
        content: 'Bug created',
        authorID: authorID
      }
    ]
  })
}

export const updateBug = (bugID, authorID, content, oldUpdates) => {
  return axios.patch(config.BACKEND + '/bugs/' + bugID, {
    updates: [
      ...oldUpdates,
      {
        time: getCurrentTime(),
        content: content,
        authorID: authorID
      }
    ]
  }
  )
}

export const forwardBug = (bugID, authorID, newStaffID, oldUpdates, username) => {
  return axios.patch(config.BACKEND + '/bugs/' + bugID, {
    staffID: newStaffID,
  }).then(() => {
    return updateBug(bugID, authorID, 'Bug is forwarded to @' + username, oldUpdates)
  })
}

export const killBug = (id) => {
  return axios.delete(config.BACKEND + '/bugs/' + id)
}