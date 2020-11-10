/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-05 15:15:50
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 16:37:28
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Table, Popover, Tag } from 'antd'
import { PlusOutlined, SyncOutlined } from '@ant-design/icons'

import { getSalaryUserSobAction } from './store/actions'
import { content } from '@/utils/content'


const columns = [
  { title: '姓名',dataIndex: 'name',key:'id'},
  { title: '工号',dataIndex: 'workID',key:'id'},
  { title: '邮箱地址',dataIndex: 'email',key:'id'},
  { title: '电话号码',dataIndex: 'phone',key:'id'},
  { title: '所属部门',dataIndex: 'department',key:'id',
    render:department=>(
      <span>{department.name}</span>
    )
  },
  { title: '工资账套',dataIndex: 'salary',width:250,key:'id',
    render:salary=>(
      <Popover content={content(salary)} placement="right" color="cyan">
        <Tag color="cyan">{salary.name}</Tag>
      </Popover>
    )
  },
  { title: '操作',dataIndex: 'operate',key:'id'},
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    return true
  },
};

 class SalaryOfPeople extends Component {
   constructor(props) {
     super(props);
     this.state = {
       salary:{},
       content:'hhhhh'
     }
     
   }
   
  componentDidMount(){
    this.props.handleSalarySob();
  }
  
  render() {
    let allData = this.props.salaryUserSob;
    for(let i = 0; i < allData.length; i++) {
      allData[i].operate =  <span>
                                <Button type="primary" danger size="small" >修改工资套账</Button>
                            </span>
    }
    return (
      <div>
        <Button type="primary" htmlType="submit" size="middle"  icon={<PlusOutlined />}>添加员工</Button>
        <Button type="primary" htmlType="submit" size="middle" style={{float:"right"}}>{<SyncOutlined />}</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={allData} />
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    salaryUserSob:state.salary.salaryUserSob
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSalarySob:()=>{
      dispatch(getSalaryUserSobAction())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SalaryOfPeople)


