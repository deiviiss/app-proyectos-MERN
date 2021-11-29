import React from 'react';
import { Switch, Route } from 'react-router-dom'

import roles from '../helpers/roles';
import routes from '../helpers/routes';

import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProyectPage from '../pages/ProyectPage'
import ProyectsPage from '../pages/ProyectsPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {
  return (
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <PublicRoute path={routes.login} exact component={LoginPage} />
      <PublicRoute path={routes.register} exact component={RegisterPage} />
      <PrivateRoute path={routes.account} exact component={AccountPage} />
      <PrivateRoute path={routes.proyects} exact component={ProyectsPage} />
      <PrivateRoute path={routes.proyect()} exact component={ProyectPage} />
      <PrivateRoute hasRole={roles.admin} path={routes.admin.users} exact component={UsersPage} />

      <Route exact path="*" component={NotFoundPage} />
    </Switch>

  )
}