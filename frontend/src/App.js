import { GlobalContextProvider } from './context/GlobalContext';
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import BugView from './components/BugView/BugView.component';
import NavBar from './components/NavBar/NavBar.component'
import ProjectView from './components/ProjectView/ProjectView.component'
import Login from './components/Login/Login.component'
import './App.css'


function App() {
  return (
    <GlobalContextProvider>
      <NavBar />
      <Switch>
        <Route path="/bugview">
          <Helmet>
            <title>BugView</title>
          </Helmet>
          <BugView />
        </Route>
        <Route path="/projectview">
          <Helmet>
            <title>Project View</title>
          </Helmet>
          <ProjectView />
        </Route>
        <Route path="/login">
          <Helmet>
            <title>Log In</title>
          </Helmet>
          <Login />
        </Route>
        <Route path="/">
          <Helmet>
            <title>404</title>
          </Helmet>
          <h1>Search google 404 bạn nhé</h1>
        </Route>
      </Switch>

    </GlobalContextProvider>
  );
}

export default App;
