import { API } from './auth'

const getCurrentTime = () => {
  const dt = new Date()
  let current_date = dt.getDate()
  let current_month = dt.getMonth() + 1
  let current_year = dt.getFullYear()
  let current_hrs = dt.getHours()
  let current_mins = dt.getMinutes()
  let current_secs = dt.getSeconds()
  current_date = current_date < 10 ? '0' + current_date : current_date
  current_month = current_month < 10 ? '0' + current_month : current_month
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs
  return current_year + '-' + current_month + '-' + current_date + ' ' + current_hrs + ':' + current_mins + ':' + current_secs
}


export const getBugList = (id, role) => {
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

export const addBug = (authorID, title, description, userID, staffID, staffUsername) => {
  return API.post('/bugs', {
    title,
    description,
    userID: userID,
    staffID: staffID,
    updates: [
      {
        time: getCurrentTime(),
        content: 'Bug created and assigned to @' + staffUsername,
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