/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-02 10:46:33
 * @LastEditors: yll
 * @LastEditTime: 2020-11-04 21:42:17
 */
import React, { Component } from 'react'
import routes from './router/index'
import {renderRoutes} from 'react-router-config';
import { BrowserRouter } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    )
  }
}

