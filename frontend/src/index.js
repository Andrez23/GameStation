import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'rc-pagination/assets/index.css';
import axios from 'axios';

axios.defaults.baseURL=('http://localhost:4000')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
 
);



