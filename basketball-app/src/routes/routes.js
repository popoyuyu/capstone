import { AuthenticationScreen, ProfileScreen } from "../screens"

export const routes = {
  main: {
    path: '/',
    element: <AuthenticationScreen />,
  },
  profile: {
    path: '/profile',
    element: <ProfileScreen />,
  },
  search: {
    path: '/search',
    element: <>search</>,
  },
}
