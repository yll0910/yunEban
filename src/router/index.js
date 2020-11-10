/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-04 15:45:43
 * @LastEditors: yll
 * @LastEditTime: 2020-11-05 19:52:17
 */
import Home from '@/pages/home'
import Login from '@/pages/login'
import { Redirect } from 'react-router-dom'

import Welcome from '../pages/home/welcome'
import UserInfo from '../pages/home/user/userInfo'

//统计管理
import EmployeeIntegral from '../pages/home/calculate/employeeIntegral'
import PersonInfoCount from '../pages/home/calculate/personInfoCount'
import PersonRecordCount from '../pages/home/calculate/personRecordCount'
import TotalMessage from '../pages/home/calculate/totalMessage'

//人事管理
import EmpAddSalary from '../pages/home/employee/empAddSalary'
import EmpInfo from '../pages/home/employee/empInfo'
import EmpRewords from '../pages/home/employee/empRewords'
import EmpTrain from '../pages/home/employee/empTrain'
import EmpTransfer from '../pages/home/employee/empTransfer'

//员工资料
import BaseInfo from '../pages/home/personInfo/baseInfo'

//薪资管理
import SalaryEndday from '../pages/home/salary/salaryEndday'
import SalaryOfPeople from '../pages/home/salary/salaryOfPeople'
import SalarySearch from '../pages/home/salary/salarySearch'
import SalarySysManage from '../pages/home/salary/salarySysManage'
import SalaryTable from '../pages/home/salary/salaryTable'

// //系统管理
import BasicInfo from '../pages/home/system/basicInfo'
import SystemBackupDB from '../pages/home/system/systemBackupDB'
import SystemInitialDB from '../pages/home/system/systemInitialDB'
import SystemMenage from '../pages/home/system/systemMenage'
import SystemOperateBlog from '../pages/home/system/systemOperateBlog'
import SystemOperatorMenage from '../pages/home/system/systemOperatorMenage'

const routes = [
  {
    path:'/',
    exact: true,
    render: () => <Redirect to='/login'/>
  },
  {
    path:'/home',
    component:Home,
    routes : [
      {
        path:'/home',
        exact:true,
        render:() => <Redirect to='/home/welcome' />
      },
      {
        path:'/home/welcome',
        component:Welcome
      },
      {
        path:'/home/userinfo',
        component:UserInfo
      },
      {
        path:'/home/sta/score',
        component:EmployeeIntegral
      },
      {
        path:'/home/sta/pers',
        component:PersonInfoCount
      },
      {
        path:'/home/sta/record',
        component:PersonRecordCount
      },
      {
        path:'/home/sta/all',
        component:TotalMessage
      },
      {
        path:'/home/per/salary',
        component:EmpAddSalary
      },
      {
        path:'/home/per/emp',
        component:EmpInfo
      },
      {
        path:'/home/per/ec',
        component:EmpRewords
      },
      {
        path:'/home/per/train',
        component:EmpTrain
      },
      {
        path:'/home/per/mv',
        component:EmpTransfer
      },
      {
        path:'/home/emp/basic',
        component:BaseInfo
      },
      {
        path:'/home/sal/month',
        component:SalaryEndday
      },
      {
        path:'/home/sal/sobcfg',
        component:SalaryOfPeople
      },
      {
        path:'/home/sal/search',
        component:SalarySearch
      },
      {
        path:'/home/sal/sob',
        component:SalarySysManage
      },
      {
        path:'/home/sal/table',
        component:SalaryTable
      },
      {
        path:'/home/sys/basic',
        component:BasicInfo
      },
      {
        path:'/home/sys/data',
        component:SystemBackupDB
      },
      {
        path:'/home/sys/init',
        component:SystemInitialDB
      },
      {
        path:'/home/sys/cfg"',
        component:SystemMenage
      },
      {
        path:'/home/sys/log',
        component:SystemOperateBlog
      },
      {
        path:'/home/sys/admin',
        component:SystemOperatorMenage
      }
    ]
  },
  {
    path:'/login',
    component:Login
  }
]

export default routes