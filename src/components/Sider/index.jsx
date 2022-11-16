import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { getSession, setSession } from '@/utils/session'
import routes from '@/routes'
import './index.less'
const reactLogo = require('@/assets/img/react.png')
const { Sider } = Layout
function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children
  }
}
function mapMenuItem(routes) {
  return routes.map(v => {
    const { label, key, icon, children, hideMenu } = v
    if(!hideMenu) {
      let hasChildren = false
      if(children && children.length) {
        hasChildren = true
      }
      return getItem(label, key, icon, hasChildren? mapMenuItem(children): '')
    }
  })
}
export default function MySider(props) {
  const [ defaultOpenKeys, setDefaultOpenKeys ] = useState([getSession('curOpenKeys') || 'system'])
  const [ defaultSelectedKeys, setDefaultSelectedKeys ] = useState([getSession('curSelectedKeys') || '/'])
  const navigate = useNavigate()
  const location = useLocation()
  let { pathname } = location
  // console.log('curOpenKeys', getSession('curOpenKeys'))
  setSession('curSelectedKeys', pathname)
  setSession('curOpenKeys', `/${pathname.split('/')[1]}`)
  const { collapsed, setCollapsed } = props
  useEffect(() => {
    setDefaultSelectedKeys([pathname])
    setDefaultOpenKeys([getSession('curOpenKeys')])
  }, [pathname])
  
  function handleJump(params) {
    const { key, keyPath } = params
    // console.log('keyPath', keyPath)
    const curOpenKey = keyPath[Math.floor(keyPath.length/2)]
    // console.log('curOpenKey', curOpenKey)
    setSession('curOpenKeys', curOpenKey)
    setSession('curSelectedKeys', key)
    navigate(key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <img src={reactLogo} className="logo" />
      <Menu 
        theme="light" 
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        selectedKeys={defaultSelectedKeys} 
        mode="inline" items={mapMenuItem(routes[0].children)} 
        onClick={(params)=>handleJump(params)} 
      />
    </Sider>
  )
}
