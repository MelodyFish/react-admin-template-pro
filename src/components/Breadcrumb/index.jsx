import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import routes from '@/routes'

export default function MyBreadCrumb() {
  const location = useLocation()
  // 以'/'为分隔符 转变成数组 同时移除值为空的第0项
  const pathSnippets = location.pathname.split('/').filter((v) => v).map(v => `/${v}`) //['/dashboard', /analysis]
  const breadcrumbItems = pathSnippets.map((value, index) => {     
    const url = `${pathSnippets.slice(0, index + 1).join('')}`   // 1. /dashboard  2./dashboard/analysis
    const curRouteLabel = getCurRouteName(routes[0].children, url) 
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{curRouteLabel}</Link>
      </Breadcrumb.Item>
    )
  })
  // 通过递归获取当前活跃路由的Label
  function getCurRouteName(routes, pathSnippet) {
    let activeLabel
    routes.map(route => {
      if(route.key === pathSnippet) {
        activeLabel = route.label
      } else if(route.children) {
        activeLabel = activeLabel? activeLabel: getCurRouteName(route.children, pathSnippet)
      }
    })
    return activeLabel
  }
  return (
    <Breadcrumb style={{
      margin: '10px'
    }}>
      {breadcrumbItems}
    </Breadcrumb>
  )
}
