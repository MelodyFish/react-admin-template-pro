/*
 * @Descripttion: 
 * @Author: GuoQiang Yu
 * @Date: 2022-08-10 15:40:35
 */
import React from 'react'
import { Layout } from 'antd'
import MyBreadCrumb from '../Breadcrumb'
import './index.less'
const { Content } = Layout

export default function MyContent(props) {
  const { children } = props
  return (
    <Content>
      <div className='breadcrum-box'>
        <MyBreadCrumb />
      </div>
      <div className="site-layout-background">
        { children }
      </div>
    </Content>
  )
}
