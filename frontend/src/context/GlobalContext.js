import { createContext, useState } from "react"


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    role: 'admin',
    name: 'John Doe'
  })
  return (
    <GlobalContext.Provider value={{
      user, setUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}