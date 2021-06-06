import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const PrivateRoute = ({ children, roles, ...props }) => {
  const { user } = useAuth()

  return (
    <Route
      {...props}
      render={({ location }) => {
        if (user.id && roles.includes(user.role)) {
          return children
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      }}
    />
  )
}
