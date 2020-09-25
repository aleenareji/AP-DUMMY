import { Login } from './';

export default {
  path: '/login',
  name: 'login',
  childRoutes: [{ path: '/login', name: 'Login', component: Login, isIndex: true }],
};
