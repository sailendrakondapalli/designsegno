import React from 'react';
import { createRoot } from 'react-dom/client';
import Try from './container/Try';
import './index.css';
import App from './App';
import Log from './container/Log';
import Fetch from './container/Fetch';
// import FirstPage from './container/FirstPage';
import reportWebVitals from './reportWebVitals';
import Form from './container/Form';
import Sandeep from './Sandeep';
const container=document.getElementById('root')
const root =createRoot(container);
root.render(
  
   <Sandeep />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
