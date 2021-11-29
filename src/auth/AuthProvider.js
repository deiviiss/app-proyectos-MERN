import { createContext } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import roles from '../helpers/roles'

//definir AuthContext con createContext
//exportar para que se consuma desde diferentes archivos
export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const history = useHistory()
  const [user, setUser] = useState(null)

  //login
  const login = (userCredentials, fromLocation) => {

    setUser({ id: 1, name_user: "David", email: "david.hilera@hotmail.com", role: roles.admin })

    if (fromLocation) {
      history.push(fromLocation)
    }
  }

  //logout
  const logout = () => setUser(null)

  //update user
  const updateUser = (data) => {
    setUser({
      ...user,
      ...data
    })
  }

  //valida usuario si el usuario existe
  const isLogged = () => user ? true : false //si existe retorna true
  //valida el rol que recibe con el rol del usuario
  const hasRole = (role) => user?.role === role

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}