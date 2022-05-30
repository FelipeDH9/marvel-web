import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Pages/Home'
import { Details } from './Pages/Details';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Details />
  </React.StrictMode>
);


reportWebVitals();
