/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:19:40
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 14:09:38
 */
import * as actionTypes from './constants'

const defaultState = {
  menu:[],
  adminInfo:[],
  staffInfo:[]
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.MENU:
      return {...state, menu:action.menu}
    case actionTypes.ADMININFO:
      return {...state, adminInfo:action.adminInfo}
    case actionTypes.STAFFINFO:
      return {...state, staffInfo:action.staffInfo}
    default:
      return state
  }
}

export default reducer