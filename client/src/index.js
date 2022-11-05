import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store';
import axios from 'axios'
const root = ReactDOM.createRoot(document.getElementById('root'));
if (localStorage.LoggedInUser) {
  const { token } = JSON.parse(localStorage.LoggedInUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


