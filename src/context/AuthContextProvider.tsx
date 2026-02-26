import { useState, type ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { type User } from '../types/User';

type AuthContextProviderProp = {
    children: ReactNode;
}

const AuthContextProvider = ({children}: AuthContextProviderProp) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    

    const contextValue = {
        user,
        setUser,
        isLoading,
        setIsLoading
    }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
