import { AuthenticationScreen } from "../screens"

export const routes = {
  main: {
    path: '/',
    element: <AuthenticationScreen />,
  },
  profile: {
    path: '/profile',
    element: <>profile</>,
  },
  search: {
    path: '/search',
    element: <>search</>,
  },
}
