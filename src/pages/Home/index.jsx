import React, { Fragment } from 'react'
import { Avatar, Card  } from 'antd'
import UserCard from './components/UserCard'
import LineChart from '@/components/LineChart'
import './index.less'
const react = require('@/assets/img/react.png')
const vue = require('@/assets/img/Vue.png')
const angular = require('@/assets/img/angular.png')
const alipay = require('@/assets/img/alipay.png')
const antd = require('@/assets/img/antd.png')
const bootstrap = require('@/assets/img/ui.png')

const gridStyle = {
  width: '33.3333%',
  height: '150px',
}
export default function workPlatform() {
  const projectItems = [
    {
      avatar: react,
      name: 'React',
      description: 'React 天下第一！'
    },
    {
      avatar: vue,
      name: 'Vue',
      description: '国内最流行的框架之一！'
    },
    {
      avatar: angular,
      name: 'Angular',
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的'
    },
    {
      avatar: antd,
      name: 'Ant Design',
      description: '国内React最流行的UI库之一。'
    },
    {
      avatar: alipay,
      name: 'Alipay',
      description: '蚂蚁金服出品，必属精品。'
    },
    {
      avatar: bootstrap,
      name: 'Alipay',
      description: '蚂蚁金服出品，必属精品。'
    },
  ]
  const teams = [
    {
      avatar: react,
      name: '菜鸡互啄组',
    },
    {
      avatar: vue,
      name: '这人懂Vue?',
      description: '国内最流行的框架之一！'
    },
    {
      avatar: angular,
      name: '全组都是吴彦祖',
    },
    {
      avatar: antd,
      name: '骗你来学计算机',
    },
    {
      avatar: alipay,
      name: '嘉然今天吃什么',
    },
    {
      avatar: bootstrap,
      name: '高逼格设计天团',
    }
  ]
  function toGreetingForTime() {
    const curTime = new Date().getHours()
    return (curTime>=5 && curTime<=12)? '早上好': (curTime>=12 && curTime<=18)? '下午好': '晚上好'
  } 
  return (
    <Fragment>
      <div className='work-platform'>
      <h2 style={{fontWeight: 'bold', color: 'var(--font-color)'}}>工作台</h2>
        <UserCard />
        <div className='work-main'>
          <div className='code-chart'>
            <LineChart />
          </div>
          <div className='project'>
            <Card title="正在进行中的项目" className='project-items'>
              {
                projectItems.map(item => {
                  return <Card.Grid style={gridStyle} key={Math.random()}>
                    <Avatar size={33} src={item.avatar} />
                    <span style={{paddingLeft: '10px', fontWeight: 'bold', fontSize: '16px'}}>{item.name}</span>
                    <div style={{marginTop: '10px'}}>
                      {item.description}
                    </div>
                  </Card.Grid>
                })
              }
            </Card>
            <Card  bordered={false} title="团队" className='team-items'>
              {
                teams.map(item => {
                  return <p key={Math.random()}>
                    <Avatar size={33} src={item.avatar} />
                    <span>{item.name}</span>
                  </p>
                })
              }
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
