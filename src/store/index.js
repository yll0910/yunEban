/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:34:08
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 11:38:47
 */
import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose
// const composeEnhancers = compose
const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer))

export default store

