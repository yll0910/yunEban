/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-05 19:45:51
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 11:12:47
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd';

import '@/assets/css/userinfo.css'

 class UserInfo extends Component {
  render() {
    const userInfo = this.props.adminInfo;
    return (
      <div className="site-card-border-less-wrapper">
        <Card title={userInfo.name} bordered={false} style={{ width: 300 }}>
          <img className="userInfoImg" src={userInfo.userFace}  alt='img'/>
          <div>
            电话号码：
            <span className="spanTag">{userInfo.telephone}</span>
          </div>
          <div>
              手机号码: 
              <span className="spanTag"> {userInfo.phone}</span>
          </div>
          <div>
              居住地址：
              <span className="spanTag">{userInfo.address}</span>
          </div>
          <div>
              用户标签：
              <span className="spanTag">{userInfo.roles&&userInfo.roles[0].nameZh}</span>
          </div>
          <Button type="primary" style={{margin:'20px 30px'}}>修改信息</Button>
          <Button type="primary" danger>修改密码</Button>
        </Card>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    adminInfo : state.home.adminInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)