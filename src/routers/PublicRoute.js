import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'

import routes from '../helpers/routes'

export default function PublicRoute({ ...props }) {

  //usuario
  const { isLogged } = useAuth()

  //si existe el usuario
  if (isLogged()) return <Redirect to={routes.proyects} />

  return (
    <Route {...props} />
  )
}

