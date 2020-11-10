/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:34:17
 * @LastEditors: yll
 * @LastEditTime: 2020-11-09 15:48:45
 */
import { combineReducers } from 'redux'
import homeReducer from '@/pages/home/store'
import salaryReducer from '@/pages/home/salary/store'
const reducer = combineReducers({
  home:homeReducer,
  salary:salaryReducer,
  
})

export default reducer