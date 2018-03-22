import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { openingCall, buttonCall } from './helpers/api.js';

ReactDOM.render(<App openingCall={openingCall} buttonCall={buttonCall}/>, 
  document.getElementById('root'));
registerServiceWorker();
