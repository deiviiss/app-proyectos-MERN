const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  account: '/account',
  proyects: '/proyects',
  proyect: (proyectId) => (proyectId ? `/proyect/:${proyectId}` : '/proyect/:proyectId'),
  admin: {
    users: '/admin/users'
  }
}

export default routes