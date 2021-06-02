import { createContext, useState, useEffect, useReducer } from 'react'
import bugAPI from '../services/bug'
import peopleAPI from '../services/people'
import { getCurrentTime } from '../utils'
import { useAuth } from './AuthContext'
import AppReducer, { initialState } from './AppReducer'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const fetchData = async () => {
    setLoading(true)
    dispatch({
      type: 'LOAD_BUGS',
      bugList: await bugAPI.getBugList()
    })
    dispatch({
      type: 'LOAD_PEOPLE',
      peopleList: await peopleAPI.getPeopleList()
    })
    setLoading(false)
  }

  // Refetch data on user logout and login
  useEffect(() => {
    if (user.accessToken) {
      fetchData()
    } else {
      dispatch({
        type: 'RESET'
      })
      setLoading(false)
    }
  }, [user.accessToken])

  async function addBug(title, description, userID, staffID) {
    const staff = state.staffList.find(staff => staff.id === staffID)
    const bug = {
      title,
      description,
      userID,
      staffID,
      updates: [
        {
          time: getCurrentTime(),
          content: 'Bug created and assigned to @' + staff.username,
          authorID: user.id
        }
      ]
    }
    bug.id = (await bugAPI.addBug(bug)).id
    dispatch({
      type: 'ADD_BUG', bug
    })
  }

  async function addUser(username, password, name) {
    const user = {
      name,
      username,
      password,
      role: 'user'
    }
    user.id = (await peopleAPI.addPerson(user)).id
    dispatch({
      type: 'ADD_USER', user
    })
  }

  async function addStaff(username, password, name) {
    const staff = {
      name,
      username,
      password,
      role: 'staff'
    }
    staff.id = (await peopleAPI.addPerson(staff)).id
    console.log(staff) ///////////////////////////
    dispatch({
      type: 'ADD_STAFF', staff
    })
  }

  async function deletePerson() {
    dispatch({
      type: 'DELETE_PERSON'
    })
    await peopleAPI.deletePerson(state.selectedPerson.id, state.bugList)
  }

  async function updatePerson(name, username, password) {
    const newInfo = {
      id: state.selectedPerson.id,
      role: state.selectedPerson.role,
      name, username, password
    }
    dispatch({
      type: 'UPDATE_PERSON', newInfo
    })
    await peopleAPI.updatePerson(newInfo)
  }

  async function updateBug(content) {
    const update = {
      time: getCurrentTime(),
      content: content,
      authorID: user.id
    }
    const bug = {
      id: state.selectedBug.id,
      updates: [
        ...state.selectedBug.updates,
        update
      ]
    }
    dispatch({
      type: 'UPDATE_BUG', update
    })
    await bugAPI.updateBug(bug)
  }

  async function forwardBug(staffID) {
    const staff = state.peopleList.find(person => person.id === staffID)
    const update = {
      time: getCurrentTime(),
      content: 'Bug is forwarded to @' + staff.username,
      authorID: user.id
    }
    const bug = {
      id: state.selectedBug.id,
      updates: [
        ...state.selectedBug.updates,
        update
      ]
    }
    dispatch({
      type: 'UPDATE_BUG', update, staffID
    })
    await bugAPI.forwardBug(bug, staffID)

    if (user.role === 'staff') {
      dispatch({
        type: 'LOAD_BUGS',
        bugList: await bugAPI.getBugList()
      })
    }
  }

  async function killBug() {
    dispatch({
      type: 'KILL_BUG'
    })
    await bugAPI.killBug(state.selectedBug.id)
  }

  function setSelectedBug(selectedBug) {
    dispatch({
      type: 'SET_BUG', selectedBug
    })
  }

  function setSelectedPerson(selectedPerson) {
    dispatch({
      type: 'SET_PERSON', selectedPerson
    })
  }

  return (
    <AppContext.Provider value={{
      ...state,
      addBug,
      addUser,
      addStaff,
      deletePerson,
      updatePerson,
      updateBug,
      forwardBug,
      killBug,
      setSelectedBug,
      setSelectedPerson
    }}>
      {!loading && children}
    </AppContext.Provider>
  )
}