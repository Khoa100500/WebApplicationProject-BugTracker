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
        <Route path="/login" component={Login}>
          <Helmet>
            <title>Log In</title>
          </Helmet>
        </Route>
        <Route path="/">
          <Helmet>
            <title>Default Page</title>
          </Helmet>
          <h1>Default Page</h1>
        </Route>
      </Switch>

    </GlobalContextProvider>
  );
}

export default App;
