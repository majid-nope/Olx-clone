import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { NPO } from './ContextConfig/contextNPO';






ReactDOM.render(
  <React.StrictMode>
    <NPO>
      <App />
    </NPO>
  </React.StrictMode>,
  document.getElementById('root')
);



