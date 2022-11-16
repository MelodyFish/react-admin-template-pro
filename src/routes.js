import Login from '@/pages/Login'
import Layout from '@/components/Layout'
import RoleComponent from '@/components/RoleComponent'

import Home from '@/pages/Home'

import Dashboard from '@/pages/Dashboard'
import Analysis from '@/pages/Dashboard/components/Analysis'
import WorkPlatform from '@/pages/Dashboard/components/WorkPlatform'

import NestedRoute from '@/pages/NestedRoute'
import FirstRoute from '@/pages/NestedRoute/components/FirstRoute'
import SecondRoute from '@/pages/NestedRoute/components/SecondRoute'
import SecondChildRoute from '@/pages/NestedRoute/components/SecondRoute/childRoute'

import Common from '@/pages/Common'
import Table from '@/pages/Common/components/Table'
import Form from '@/pages/Common/components/Form'

import Page404 from '@/pages/404'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

const routes = [  
  {
    path: '/',
    element: <Layout />,
    label: '系统',
    key: 'system',
    icon: <FileOutlined />,
    children: [
      {
        index: true,
        // path: '/',
        element: <Home />,
        label: '首页',
        key: '/',
        icon: <PieChartOutlined />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        label: 'Dashboard',
        key: '/dashboard',
        icon: <UserOutlined />,
        children: [
          // {
          //   index: true,
          //   element: <Analysis />,
          //   // label: '分析页',
          //   key: 'analysis',
          //   // icon: <TeamOutlined />,
          //   hideMenu: true
          // },
          {
            path: 'analysis',
            element: <RoleComponent><Analysis /></RoleComponent>,
            label: '分析页',
            key: '/dashboard/analysis',
            icon: <TeamOutlined />,
            hideMenu: JSON.parse(localStorage.getItem('user'))?.userInfo.role === 'admin'? false: true
          },
          {
            path: 'work-platform',
            element: <WorkPlatform />,
            label: '工作台',
            key: '/dashboard/work-platform',
            icon: <DesktopOutlined />,
          }
        ]
      },
      {
        path: '/nested-route',
        element: <NestedRoute />,
        label: '路由嵌套',
        key: '/nested-route',
        icon: <UserOutlined />,
        children: [
          {
            path: 'first-route',
            element: <FirstRoute />,
            label: '菜单1-1',
            key: '/nested-route/first-route',
            icon: <TeamOutlined />,
          },
          {
            path: 'second-route',
            element: <SecondRoute />,
            label: '菜单1-2',
            key: '/nested-route/second-route',
            icon: <DesktopOutlined />,
            children: [
              {
                path: 'child-route',
                element: <SecondChildRoute />,
                label: '菜单1-2-1',
                key: '/nested-route/second-route/child-route',
                icon: <TeamOutlined />,
              },
            ]
          }
        ]
      },
      {
        path: '/common',
        element: <Common />,
        label: '组件',
        key: '/common',
        icon: <UserOutlined />,
        children: [
          {
            path: 'table',
            element: <Table />,
            label: 'Table表格',
            key: '/common/table',
            icon: <TeamOutlined />,
          },
          {
            path: 'form',
            element: <Form />,
            label: 'Form表单',
            key: '/common/form',
            icon: <DesktopOutlined />
          }
        ]
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    label: '登录',
    key: '/login',
    icon: <DesktopOutlined />
  },
  {
    path: '*',
    element: <Page404 />,
    label: '404',
    key: '404',
    icon: <TeamOutlined />
  }
]
export default routes
