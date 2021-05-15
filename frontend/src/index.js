import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from './context/GlobalContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
