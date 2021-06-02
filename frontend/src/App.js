import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import BugView from './components/BugView/BugView';
import NavBar from './components/NavBar/NavBar'
import ProjectView from './components/ProjectView/ProjectView'
import Login from './components/Login/Login'
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user } = useAuth()
  return (
    <Switch>
      <PrivateRoute path="/bugview">
        <NavBar />
        <Helmet>
          <title>BugView</title>
        </Helmet>
        <BugView />
      </PrivateRoute>
      <PrivateRoute path="/projectview">
        <NavBar />
        <Helmet>
          <title>Project View</title>
        </Helmet>
        <ProjectView />
      </PrivateRoute>
      <Route path="/login" render={({ location }) => {
        if (user.accessToken) {
          return <Redirect
            to={{
              pathname: "/bugview",
              state: { from: location }
            }}
          />
        } else {
          return (
            <>
              <Helmet>
                <title>Log In</title>
              </Helmet>
              <Login />
            </>
          )
        }
      }} >
      </Route>
      <Route path="/" >
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
