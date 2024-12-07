import { Dashboard } from './views/dashboard';
import { Login } from './views/login';

interface Route {
  name: string;
  element: JSX.Element;
  path: string;
}

export const appRoutes: Route[] = [
  {
    name: 'Dashboard',
    element: <Dashboard />,
    path: '/app/dashboard',
  },
];

export const publicRoutes: Route[] = [
  {
    name: 'Login',
    element: <Login />,
    path: '/login',
  },
];
