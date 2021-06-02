import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export const PrivateRoute = ({ children, ...props }) => {
  const { user } = useAuth()
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (user.accessToken) {
          return children
        } else {
          alert('Unauthorized access')
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
