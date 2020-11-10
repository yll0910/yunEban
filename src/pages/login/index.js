/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 16:17:33
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 14:44:20
 */

 import React, { Component } from 'react'
 import request from '@/service'
 import { Form, Input, Button, Checkbox, message} from 'antd';
 import { UserOutlined, LockOutlined } from '@ant-design/icons';

 import  '@/assets/css/login.css'

 let baseImgUrl = "/captcha?time="

 export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaUrl :  baseImgUrl
    }
  }

  componentDidMount(){
    let result = localStorage.getItem('login');
    if (result === 'true') {
      this.props.history.push('/home');
    }
  }
  updateCaptcha() {
    this.setState({
      captchaUrl: this.state.captchaUrl + Date.now()
    })
  }
  async handleForm(value) {
    console.log(value);
    const { username, password, code, remember } = value;
    localStorage.setItem('login',remember);
    const res = await  request.post('/login',{username, password, code});
    if (res.message === '登录成功') {
      this.props.history.push('/home');
      let tokenHead = res.obj.tokenHead;
      let token = res.obj.token;
      localStorage.setItem('tokenHead',tokenHead);
      localStorage.setItem('token',token);
      message.success('登录成功哦')
    }else{
      message.error('登录失败呢')
    }
  }

   render() {
     return (
       <div className="loginContainer">
        <Form name="normal_login" initialValues={{remember: true}} onFinish={e =>this.handleForm(e)}>
          <Form.Item>
            <h3 className="loginTitle">系统登录</h3>
          </Form.Item>

          <Form.Item name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="请输入密码"/>
          </Form.Item>

          <Form.Item name="code" style={{float:'left'}}>
            <Input  style={{width:'165px',marginRight: '5px'}}  placeholder="点击图片更换验证码" />
          </Form.Item>

            <img  src={this.state.captchaUrl} onClick={e =>this.updateCaptcha(e)} style={{margin:'-4px 0 0 5px'}} alt="img" />

            <Form.Item name="remember" valuePropName="checked" style={{clear:'both'}}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
       </div>
     )
   }
 }
 

 