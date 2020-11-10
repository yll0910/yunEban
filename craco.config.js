/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:09:22
 * @LastEditors: yll
 * @LastEditTime: 2020-11-04 16:09:51
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}