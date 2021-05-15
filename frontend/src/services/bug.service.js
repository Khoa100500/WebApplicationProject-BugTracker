import { API } from './auth.service'

const getCurrentTime = () => new Date().toJSON().slice(0, 19).replace('T', ' ')

export const getBugList = (id, role) => {
  console.log(id, role)
  if (role === 'admin') {
    return API.get('/bugs').then((res) => {
      return res.data
    })
  } else if (role === 'staff') {
    return API.get('/bugs?staffID=' + id).then((res) => {
      return res.data
    })
  } else if (role === 'user') {
    return API.get('/bugs?userID=' + id).then((res) => {
      return res.data
    })
  }
}

export const addBug = (authorID, title, description, userID, staffID) => {
  return API.post('/bugs', {
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
  return API.patch('/bugs/' + bugID, {
    updates: [
      ...oldUpdates,
      {
        time: getCurrentTime(),
        content: content,
        authorID: authorID
      }
    ]
  })
}

export const forwardBug = (bugID, authorID, newStaffID, oldUpdates, username) => {
  return API.patch('/bugs/' + bugID, { staffID: newStaffID }).then(() => {
    return updateBug(bugID, authorID, 'Bug is forwarded to @' + username, oldUpdates)
  })
}

export const killBug = (id) => {
  return API.delete('/bugs/' + id)
}