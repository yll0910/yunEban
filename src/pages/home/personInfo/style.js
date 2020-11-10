/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-06 15:15:19
 * @LastEditors: yll
 * @LastEditTime: 2020-11-06 16:57:37
 */
import styled from 'styled-components'
import { Button, Input} from 'antd'

export const InputWrap = styled(Input)`
  width:50%;
  border-radius:5px;
`

export const ButtonWrapRight = styled(Button)`
  background-color: #67C23A;
  border-color: #67C23A;
`

export const LeftWrap = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:10px;
  .ant-btn{
    margin-left:10px;
  }
  .RightButton:hover{
    background-color:#85c161;
    border-color: #85c161;
  }

`

