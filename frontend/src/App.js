import { GlobalContextProvider } from './context/GlobalContext';
import BugView from "./components/BugView/BugView.component";


function App() {
  return (
    <GlobalContextProvider>
      <BugView />
    </GlobalContextProvider>
  );
}

export default App;
