import React, { useState } from 'react'
import { Layout, Avatar, Tabs, List } from 'antd'
import HeaderTools from '../HeaderTools'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import './index.less'
import '../../assets/icon/iconfont.css'

const { Header } = Layout
const data = [
  {
    title: '你收到了 14 份新周报',
  },
  {
    title: '你推荐的 曲妮妮 已通过第三轮面试',
  },
  {
    title: '这种模板可以区分多种通知类型',
  },
  {
    title: '左侧图标用于区分不同的类型',
  },
]
const detailMessage = (
  <List
    style={{margin: '0 20px'}}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="5 年 前"
        />
      </List.Item>
    )}
  />
)
export default function MyHeader(props) {
  const { collapsed, setCollapsed } = props
  const [ messageShow, setMessageShow ] = useState(false)
  function onChange(activeTab) {
    console.log('activeTab', activeTab)
  }
  return (
    <Header>
      <span className='trigger' onClick={()=>setCollapsed(!collapsed)} >
        {collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />}
      </span>
      <HeaderTools messageShow={messageShow} setMessageShow={setMessageShow} />
      <div className='message-box' style={{display: messageShow? 'block': 'none'}}>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `通知`,
              key: '1',
              children: detailMessage,
            },
            {
              label: `消息`,
              key: '2',
              children: detailMessage,
            }
          ]}
        />
      </div>
    </Header>
  )
}
