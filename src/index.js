import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import './skeleton.css';
import './index.css';

const routed = <BrowserRouter>
  <App />
</BrowserRouter>;

ReactDOM.render(routed, document.getElementById('root'));
registerServiceWorker();
