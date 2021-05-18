import { createContext, useState, useEffect } from "react"
import { getBugList } from '../services/bug.service'
import { getPeopleList } from '../services/people.service'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: undefined,
    role: undefined,
    name: undefined,
    username: undefined,
    accessToken: undefined
  })
  const [bugList, setBugList] = useState([])
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    refreshBugList()
    refreshPeopleList()
  }, [])

  const refreshBugList = () => {
    return getBugList(user.id, user.role)?.then((bugs) => {
      setBugList(bugs)
    })
  }

  const refreshPeopleList = () => {
    return getPeopleList()?.then((people) => {
      setPeopleList(people)
    })
  }

  return (
    <GlobalContext.Provider value={{
      user, setUser,
      bugList, peopleList,
      refreshBugList, refreshPeopleList
    }}>
      {children}
    </GlobalContext.Provider>
  )
}