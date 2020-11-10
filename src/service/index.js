/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 15:59:38
 * @LastEditors: yll
 * @LastEditTime: 2020-11-05 11:28:33
 */
import axios from 'axios'
import { TIMEOUT } from './constants'

const tokenHead = localStorage.getItem('tokenHead')
const token = localStorage.getItem('token')
const authorization = tokenHead + '' + token;
const instance = axios.create({
  timeout:TIMEOUT,
  headers:{"Authorization":authorization}
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  return res.data
})

export default instance