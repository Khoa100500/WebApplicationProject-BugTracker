import { GlobalContextProvider } from './context/GlobalContext';
import { Switch, Route } from 'react-router-dom'

import BugView from './components/BugView/BugView.component';
import NavBar from './components/NavBar/NavBar.component'
import ProjectView from './components/ProjectView/ProjectView.component'
import Login from './components/Login/Login.component'


function App() {
  return (
    <GlobalContextProvider>
      <NavBar />
      <Switch>
        <Route path="/bugview">
          <BugView />
        </Route>
        <Route path="/projectview">
          <ProjectView />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <h1>Search google 404 bạn nhé</h1>
        </Route>
      </Switch>

    </GlobalContextProvider>
  );
}

export default App;
