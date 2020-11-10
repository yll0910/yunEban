/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:19:19
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 19:25:34
 */
import * as actionTypes from './constants'
import request from '@/service'

const getMenu = (menu) => ({
  type: actionTypes.MENU,
  menu,
})

const getAdminInfo = (adminInfo) => ({
  type:actionTypes.ADMININFO,
  adminInfo
})

const getStaffInfo = (staffInfo) => ({
  type:actionTypes.STAFFINFO,
  staffInfo
})



export const getMenuAction = function(){
  return async dispatch => {
    const res = await request.get('/system/menu')
    dispatch(getMenu(res))
  }
}

export const getAdminInfoAction = function(){
  return async dispatch => {
    const res = await request.get('/admin/info')
    dispatch(getAdminInfo(res))
  }
}

export const getStaffInfoAction = function() {
  return async dispatch => {
    const res = await request.get('/employee/basic/?size=100')
    dispatch(getStaffInfo(res.data))
  }
}

export const changeStaffInfoAction = function(newStaffData) {
  return dispatch => {
    dispatch(getStaffInfo(newStaffData))
  }
}