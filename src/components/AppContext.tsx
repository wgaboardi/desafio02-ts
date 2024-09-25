import { createContext, useEffect, useState } from 'react';

import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
  setUser(user: string): void
}

export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ( {children}: any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const [ user, setUser ] = useState<string>('')

  const loginIn = getAllLocalStorage('diobank')
  const userIn = getAllLocalStorage('diouser')
  // controla o status do login
  useEffect(() => {
    if (loginIn) {
      const { login } = JSON.parse(loginIn)
      setIsLoggedIn(login)
    }},[loginIn])
  // aproveita ultimo usuario logado
  useEffect(() => {
    if (userIn) {
      const { email } = JSON.parse(userIn)
      setUser( email )
  }},[userIn])

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setUser}}>
    { children }
    </AppContext.Provider>
  )
}

export default AppContextProvider;