/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-06 19:39:26
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 21:19:39
 */
import * as actionTypes from './constains'

const defaultState = {
  salarySob:[],
  salaryUserSob:[]
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SALARYSOB:
      return {...state,salarySob:action.salarySob}
    case actionTypes.SALARYUSERSOB:
      return {...state,salaryUserSob:action.salaryUserSob}
    default:
      return state
  }
}

export default reducer 
