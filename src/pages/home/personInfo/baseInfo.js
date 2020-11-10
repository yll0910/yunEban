/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-05 15:13:21
 * @LastEditors: yll
 * @LastEditTime: 2020-11-09 16:01:42
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exportExcel } from 'xlsx-oc'

import { Table, Button } from 'antd';
import { SearchOutlined, CaretDownOutlined, ArrowUpOutlined, ArrowDownOutlined, PlusOutlined } from '@ant-design/icons'

import { getStaffInfoAction, changeStaffInfoAction } from '../store/actions';
import { ButtonWrapRight, InputWrap, LeftWrap} from './style'

const columns = [
  { title: '姓名',width: 100,dataIndex: 'name',key: 'id',fixed: 'left',},
  { title: '工号', dataIndex: 'workID',width:100,key:'id'},
  { title: '性别', dataIndex: 'gender',width:60 ,key:'gender'},
  { title: '出生日期', dataIndex: 'birthday',width:110,key:'id'},
  { title: '身份证号码', dataIndex: 'idCard',width:180,key:'id'},
  { title: '婚姻情况', dataIndex: 'wedlock',width:100,key:'id'},
  { title: '民族', dataIndex: 'nation',width:100,key:'id',
    render: nation=>(
      <span>{nation.name}</span>
    )
  },
  { title: '籍贯', dataIndex: 'nativePlace',width:120,key:'id'},
  { title: '政治面貌', dataIndex: 'politicsStatus',width:150,key:'id',
    render: politicsStatus=>(
      <span>{politicsStatus.name}</span>
    )
  },
  { title: '电子邮件', dataIndex: 'email',width:200,key:'id'},
  { title: '电话号码', dataIndex: 'phone',width:120 ,key:'id'},
  { title: '联系地址', dataIndex: 'address',width:400,key:'id' },
  { title: '所属部门', dataIndex: 'department',width:120,key:'id',
    render: department=>(
      <span>{department.name}</span>
    )
  },
  { title: '职称', dataIndex: 'joblevel',width:120,key:'id',
    render: joblevel=>(
      <span>{joblevel.name}</span>
    )
  },
  { title: '职位', dataIndex: 'position',width:120 ,key:'id' },
  { title: '聘用形式', dataIndex: 'engageForm',width:120,key:'id' },
  { title: '最高学历', dataIndex: 'tiptopDegree',width:100 ,key:'id'},
  { title: '毕业院校', dataIndex: 'school',width:180 ,key:'id'},
  { title: '专业', dataIndex: 'specialty',width:180 ,key:'id'},
  { title: '在职状态', dataIndex: 'workState',width:60,key:'id' },
  { title: '入职日期', dataIndex: 'beginDate',width:110 ,key:'id'},
  { title: '转正日期', dataIndex: 'conversionTime',width:110,key:'id' },
  { title: '合同起始日期', dataIndex: 'beginContract',width:110,key:'id' },
  { title: '合同截止日期', dataIndex: 'endContract',width:110,key:'id' },
  { title: '合同期限', dataIndex: 'contractTerm',width:90,key:'id',
    render: contractTerm=>(
      <span>{contractTerm + '年'}</span>
    )  
  },
  { title: '操作', width:250,dataIndex:'operate', fixed: 'right',key:'id'}
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    return true
  },
};
 class BaseInfo extends Component {
   state = {
     iptValue:''
   }
  componentDidMount(){
    this.props.handleAllData();
  }

  handleInput(e){
    let iptValue = e.target.value;
    console.log(iptValue);
    this.setState({
      iptValue
    })
  }

  handleSearch(){
    let filterData = this.props.allData.filter(item => item.name.includes(this.state.iptValue))
    this.props.handleChange(filterData);
  }

  exportExcel(){
    let allData = this.props.allData;
    //处理数据
    let arr = [];
    for (let i = 0; i < allData.length; i++) {
      const obj = {};
      obj.name = allData[i].name;
      obj.workID = allData[i].workID;
      obj.gender = allData[i].gender;
      obj.birthday = allData[i].birthday;
      obj.idCard = allData[i].idCard;
      obj.wedlock = allData[i].wedlock;
      obj.nation = allData[i].nation.name;
      obj.nativePlace = allData[i].nativePlace;
      obj.politicsStatus = allData[i].politicsStatus.name;
      obj.email = allData[i].email;
      obj.phone = allData[i].phone;
      obj.address = allData[i].address;
      obj.department = allData[i].department.name;
      obj.joblevel = allData[i].joblevel.name;
      obj.position = allData[i].position.name;
      obj.engageForm = allData[i].engageForm;
      obj.tiptopDegree = allData[i].tiptopDegree;
      obj.school = allData[i].school;
      obj.specialty = allData[i].specialty;
      obj.workState = allData[i].workState;
      obj.beginDate = allData[i].beginDate;
      obj.conversionTime = allData[i].conversionTime;
      obj.beginContract = allData[i].beginContract;
      obj.endContract = allData[i].endContract;
      obj.contractTerm = allData[i].contractTerm;
      arr.push(obj);
    }
    const list = arr;
    const header = [
      {k:'name',v:'姓名'},
      {k:'workID',v:'工号'},
      {k:'gender',v:'性别'},
      {k:'birthday',v:'出生日期'},
      {k:'idCard',v:'身份证号码'},
      {k:'wedlock',v:'婚姻情况'},
      {k:'nation',v:'民族'},
      {k:'nativePlace',v:'籍贯'},
      {k:'politicsStatus',v:'政治面貌'},
      {k:'email',v:'电子邮件'},
      {k:'phone',v:'电话号码'},
      {k:'address',v:'联系地址'},
      {k:'department',v:'所属部门'},
      {k:'joblevel',v:'职称'},
      {k:'position',v:'职位'},
      {k:'engageForm',v:'聘用形式'},
      {k:'tiptopDegree',v:'最高学历'},
      {k:'school',v:'毕业院校'},
      {k:'specialty',v:'专业'},
      {k:'workState',v:'在职状态'},
      {k:'beginDate',v:'入职日期'},
      {k:'conversionTime',v:'转正日期'},
      {k:'beginContract',v:'合同起始日期'},
      {k:'endContract',v:'合同截止日期'},
      {k:'contractTerm',v:'合同期限'},
    ]
    const fileName = "员工基本资料表.xlsm";
    exportExcel(header,list,fileName);
  }

  render() {
    let allData = this.props.allData;
    for(let i = 0; i < allData.length; i++) {
      allData[i].operate =  <span>
                                <Button size="small" style={{marginRight:10}}>编辑</Button>
                                <Button  size="small" type="primary" style={{marginRight:10,color:'white'}}>查看高级信息</Button>
                                <Button  size="small" style={{backgroundColor:'#F78383',color:'white'}}>删除</Button>
                            </span>
    }
    return (
      <div>
        <LeftWrap>
          <div>
            <InputWrap size="middle" placeholder="请输入员工名进行搜索" value={this.state.iptValue} onChange={e =>this.handleInput(e)}  prefix={<SearchOutlined />} /> 
            <Button type="primary" htmlType="submit" size="middle" onClick={e=>this.handleSearch()}  icon={<SearchOutlined />}>搜索</Button>
            <Button type="primary" htmlType="submit" size="middle"  icon={<CaretDownOutlined />}>高级搜索</Button>
          </div>
          <div>
            <ButtonWrapRight type="primary" htmlType="submit" size="middle"  className="RightButton" icon={<ArrowUpOutlined />}>导入数据</ButtonWrapRight>
            <ButtonWrapRight type="primary" htmlType="submit" size="middle" className="RightButton"  icon={<ArrowDownOutlined />} onClick={e=>this.exportExcel()}>导出数据</ButtonWrapRight>
            <Button type="primary" htmlType="submit" size="middle"  icon={<PlusOutlined />}>添加员工</Button>
          </div>
        </LeftWrap>
        <Table rowSelection={rowSelection} columns={columns} dataSource={allData} scroll={{ x: 1500 }} sticky />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allData:state.home.staffInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAllData:()=>{
      dispatch(getStaffInfoAction())
    },
    handleChange:(newStaffData)=>{
      dispatch(changeStaffInfoAction(newStaffData))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BaseInfo)