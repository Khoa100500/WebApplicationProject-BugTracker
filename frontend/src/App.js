import { Switch, Route, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { setAuthToken, PrivateRoute } from './services/auth'
import { useContext } from 'react';
import { GlobalContext } from './context/GlobalContext';

import BugView from './components/BugView/BugView';
import NavBar from './components/NavBar/NavBar'
import ProjectView from './components/ProjectView/ProjectView'
import Login from './components/Login/Login'


function App() {
  const { setUser } = useContext(GlobalContext)
  return (
    <>
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
          const user = JSON.parse(localStorage.getItem('user'))
          if (user && user.accessToken) {
            setAuthToken(user.accessToken)
            setUser(user)
            return <Redirect
              to={{
                pathname: "/bugview",
                state: { from: location }
              }}
            />
          } else {
            return <>
              <Helmet>
                <title>Log In</title>
              </Helmet>
              <Login />
            </>
          }
        }} >
        </Route>
        <Route path="/" >
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
