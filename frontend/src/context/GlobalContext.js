import { createContext, useState, useEffect } from "react"
import { getBugList } from '../services/bug.service'
import { getPeopleList } from '../services/people.service'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '0',
    role: 'admin',
    name: 'The Master'
  })
  const [bugList, setBugList] = useState([])
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    refreshBugList()
    refreshPeopleList()
  }, [])

  const refreshBugList = () => {
    getBugList(user.id, user.role).then((bugs) => {
      setBugList(bugs)
    })
  }

  const refreshPeopleList = () => {
    getPeopleList().then((people) => {
      setPeopleList(people)
    })
  }

  return (
    <GlobalContext.Provider value={{
      user, setUser,
      bugList, setBugList,
      peopleList, setPeopleList,
      refreshBugList, refreshPeopleList
    }}>
      {children}
    </GlobalContext.Provider>
  )
}