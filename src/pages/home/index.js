/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 19:11:45
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 11:56:11
 */
import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config';
import { connect } from 'react-redux'
// import routes from '@/router'
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import {
  DesktopOutlined,
  MoneyCollectOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined
} from '@ant-design/icons';

import { getMenuAction, getAdminInfoAction, getStaffInfoAction } from './store/actions'
import '@/assets/css/home.css'


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

 class Home extends Component {
  state = {
    collapsed: false,
    name:''
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    //派发事件 （网络请求通过中间件转移到action中请求）
    this.props.handleForm(); 
    this.props.handleAdminInfo();
  }
  handleJump(url,itemname){
    this.props.history.push('/home' + url);
    this.props.handleStaffInfo();
    this.setState({
      name:itemname
    })
  }
   handleToUserInfo ({key}){
    console.log(key);
    if (key === '1') {
     this.props.history.push('/home/userinfo' );
    }
  }
  render() {
    const { collapsed } = this.state;
    let data = this.props.menu;
    let adminInfo = this.props.adminInfo;
    const menu = (
      <Menu onClick={e =>this.handleToUserInfo(e)}>
        <Menu.Item key="1">个人中心</Menu.Item>
        <Menu.Item key="2">设置</Menu.Item>
        <Menu.Item key="3">注销登录</Menu.Item>
      </Menu>
    );
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">云E办</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu  key="1" icon={<UserOutlined />} title="员工资料">
              {
                data.length > 0 ? 
                data[0].children.map(item =>{
                  return  <Menu.Item key={item.id} onClick={e =>this.handleJump(item.path,item.name)} >{item.name}</Menu.Item>
                }       
                )
                : ''
              }       
            </SubMenu>
            <SubMenu key="2" icon={<TeamOutlined />} title="人事管理">
            {
              data.length > 0 ? 
              data[1].children.map(item =>{
                return  <Menu.Item key={item.id} onClick={e =>this.handleJump(item.path,item.name)} >{item.name}</Menu.Item>
              }       
              )
              : ''
            } 
            </SubMenu>

            <SubMenu key="sub1" icon={<MoneyCollectOutlined />} title="薪资管理">
            {
              data.length > 0 ? 
              data[2].children.map(item =>{
                return  <Menu.Item key={item.id} onClick={e =>this.handleJump(item.path,item.name)} >{item.name}</Menu.Item>
              }       
              )
              : ''
            } 
            </SubMenu>

            <SubMenu key="sub2" icon={<FileOutlined />} title="统计管理">
            {
              data.length > 0 ? 
              data[3].children.map(item =>{
                return  <Menu.Item key={item.id} onClick={e =>this.handleJump(item.path,item.name)} >{item.name}</Menu.Item>
              }       
              )
              : ''
            } 
            </SubMenu>

            <SubMenu key="9" icon={<DesktopOutlined  />} title="系统管理">
            {
              data.length > 0 ? 
              data[4].children.map(item =>{
                return  <Menu.Item key={item.id} onClick={e =>this.handleJump(item.path,item.name)}>{item.name}</Menu.Item>
              }       
              )
              : ''
            } 
            </SubMenu>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <span className="headerDetail">
              <span  style={{marginRight: '8px',color: 'black'}}><MailOutlined /></span>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                  {adminInfo.name}
                </a>
              </Dropdown>
              <img className="ant-image-img" src={adminInfo.userFace} alt="img1"/>
            </span>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.name}</Breadcrumb.Item>
            </Breadcrumb>        
              {renderRoutes(this.props.route.routes)}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

 
const mapStateToProps = state => {
  return {
    menu:state.home.menu,
    adminInfo:state.home.adminInfo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //进行映射
    handleForm: () => {
      dispatch(getMenuAction())
    },
    handleAdminInfo: () => {
      dispatch(getAdminInfoAction())
    },
    handleStaffInfo:() =>{
      dispatch(getStaffInfoAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
