import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { AppContextProvider } from './contexts/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
