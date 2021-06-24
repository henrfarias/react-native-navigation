import React, { createContext, useState } from 'react'
import { IAuthContext } from '../types/IAuthContext';

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  signIn: () => {},
  signOut: () => {}
})

const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const signIn = () => {
    setIsLoggedIn(true);
  }

  const signOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
} 

export { AuthContext, AuthProvider };
