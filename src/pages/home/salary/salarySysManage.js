/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-05 15:14:56
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 15:20:50
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Table, Modal, message } from 'antd'
import { PlusOutlined, SyncOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import request from '@/service'
import { getSalarySobAction } from './store/actions'


const columns = [
  { title: '账套名称',dataIndex: 'name',key:'id'},
  { title: '基本工资',dataIndex: 'basicSalary',key:'id'},
  { title: '交通补助',dataIndex: 'trafficSalary',key:'id'},
  { title: '午餐补助',dataIndex: 'lunchSalary',key:'id'},
  { title: '奖金',dataIndex: 'bonus',key:'id'},
  { title: '启用时间',dataIndex: 'createDate',key:'id'},
  { title: '养老金',
    children: [
      {
        title: '比率',
        dataIndex: 'pensionPer',
        key:'id'
      },
      {
        title: '基数',
        dataIndex: 'pensionBase',
        key:'id'
      },
    ],
  },
  { title: '医疗保险',
    children: [
      {
        title: '比率',
        dataIndex: 'medicalPer',
        key:'id'
      },
      {
        title: '基数',
        dataIndex: 'medicalBase',
        key:'id'
      },
    ],
  },
  { title: '公积金',
  children: [
    {
      title: '比率',
      dataIndex: 'accumulationFundPer',
      key:'id'
    },
    {
      title: '基数',
      dataIndex: 'accumulationFundBase',
      key:'id'
    },
  ],
  },
  { title: '操作',dataIndex: 'operate',key:'operate'}
];


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    return true
  },
};

class SalarySysManage extends Component {

  componentDidMount(){
    this.props.handleSalarySob();
  }

   confirm(id) {
    return (
      Modal.confirm({
        title: '提示',
        icon: <ExclamationCircleOutlined />,
        content: '此操作将永久删除该工资账套, 是否继续?',
        okText: '确认',
        cancelText: '取消',
        onOk:async ()=>{
          let res = await request.delete('/salary/sob/'+id);
          if (res.code === 200) {
            console.log('成功');
            message.success('删除成功！');
            console.log(this);
            this.props.handleSalarySob();
          }
        },
        onCancel:()=>{
          console.log('取消');
          message.warning('您取消了操作~')
        }
      })
    )
  }
  
  handleDeleteSob(id) {
    console.log(this);
    this.confirm(id);
    // this.props.handleSalarySob();
  }

  render() {
    let allData = this.props.salarySob;
    for(let i = 0; i < allData.length; i++) {
      allData[i].operate =   <span>
                                <Button type="primary" size="small" >编辑</Button>
                                <Button type="primary" danger size="small" onClick={()=>this.handleDeleteSob(allData[i].id)} >删除</Button>
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
    salarySob:state.salary.salarySob
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSalarySob:()=>{
      dispatch(getSalarySobAction())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SalarySysManage)
