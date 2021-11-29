import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

import routes from '../helpers/routes'

export default function PrivateRoute({ hasRole: role, ...props }) {

  const location = useLocation()
  const { isLogged, hasRole } = useAuth()

  //si existe el rol y si el rol de la ruta es igual al rol del usuario
  if (role && !hasRole(role)) return <Redirect to={routes.home} />

  // si no existe el usuario
  // if (!isLogged()) return <Redirect to={routes.login} />
  if (!isLogged()) return <Redirect to={{ pathname: routes.login, state: { from: location } }} />

  return (
    <Route {...props} />
  )
}
