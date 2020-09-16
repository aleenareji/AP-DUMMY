import {
  Home,
} from './';

export default {
  path: '/dashboard',
  name: 'Home',
  childRoutes: [
    { path: 'home',
      name: 'Home',
      component: Home,
      isIndex: true,
    },
  ],
};
