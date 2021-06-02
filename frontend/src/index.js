import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { AppContextProvider } from './contexts/AppContext';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
