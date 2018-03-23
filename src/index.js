import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import { openingCall, buttonCall } from './helpers/api.js';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App openingCall={openingCall} buttonCall={buttonCall}/>
  </BrowserRouter>
);

ReactDOM.render(router, 
  document.getElementById('root'));
