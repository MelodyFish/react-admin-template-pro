import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Switch, Dropdown, Avatar, Menu, Badge, message } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import { getSession, setSession } from '@/utils/session'
import {
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import '../../assets/icon/iconfont.css'

const app = document.body
function HeaderTools(props) {
  const { messageShow, setMessageShow } = props
  const { userStore } = useStore()
  const [ theme, setTheme ] = useState(getSession('theme') || 'day')
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              <UserOutlined style={{paddingRight: '10px'}} />个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              <SettingOutlined style={{paddingRight: '10px'}}/>个人设置
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <Link to='/login' onClick={() => logout()}>
              <LogoutOutlined style={{paddingRight: '10px'}} />退出登录
            </Link>
          ),
        },
      ]}
    />
  )
  function logout() {
    userStore.clearAllInfo()
    message.success('退出成功')
  }
  function changeTheme(checked) {
    checked? setTheme('day'): setTheme('dark')
  }
  console.log('userStore', userStore.userInfo)
  useEffect(() => {
    app.className = theme
    setSession('theme', theme)
  }, [theme])
  return (
    <div  className='tools'>
      <div className='user-message'>
        <Badge size='small'  count={5} onClick={()=>setMessageShow(!messageShow)}>
          <BellOutlined style={{color: 'var(--font-color)'}} />
        </Badge>
      </div>
      <Dropdown overlay={menu}>
        <div className='user-info' >
          <Avatar icon={<UserOutlined />} />
          <span className='nickname'>{userStore.userInfo.name}</span>
        </div>
      </Dropdown>
      <Switch
        className={'switch '}
        checkedChildren={ <i className='iconfont icon-Daytimemode' style={{fontSize: '22px'}} />}
        unCheckedChildren={<i className='iconfont icon-dark' style={{fontSize: '22px'}} />}
        defaultChecked = {theme==='day'? 'defaultChecked': false}
        onChange={(checked)=>changeTheme(checked)}
      />
    </div>
  )
}
export default observer(HeaderTools)