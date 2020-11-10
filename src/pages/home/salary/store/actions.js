/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-06 19:38:38
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 10:13:42
 */
import * as actionTypes from './constains'
import request from '@/service'

const getSalarySob = (salarySob) =>({
  type:actionTypes.SALARYSOB,
  salarySob
})

const getSalaryUserSob = (salaryUserSob) =>({
  type:actionTypes.SALARYUSERSOB,
  salaryUserSob
})

// const deleteSalarySob = (salarySob) => ({
//   type:actionTypes.SALARYUSERSOB,
//   salarySob
// })

export const getSalarySobAction = function() {
  return async dispatch =>{
    let res =await request.get('/salary/sob/');
    dispatch(getSalarySob(res))
  }
}

export const getSalaryUserSobAction = function(){
  return async dispatch => {
    let res = await request.get('/salary/sobcfg/?size=100');
    dispatch(getSalaryUserSob(res.data))
  }
}

// export const deleteSalarySobAction = function(id) {
//   return async dispatch => {
//     let res = await request.post('/salary/sob/'+id)
//     dispatch(deleteSalarySob(res))
//   }
// }