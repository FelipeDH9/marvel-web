import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Pages/Home'
import { Details } from './Pages/Details';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NotFound } from './Pages/Not Found';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/details" element={<Details />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>

);


reportWebVitals();
  