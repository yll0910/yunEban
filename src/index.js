/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-02 10:46:33
 * @LastEditors: yll
 * @LastEditTime: 2020-11-04 19:05:06
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'

import  './assets/css/reset.css'

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
