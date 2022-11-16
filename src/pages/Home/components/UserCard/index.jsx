import React from 'react'
import { Avatar } from 'antd'
import './index.less'

export default function Details(props) {
  const { positionDetails } = props
  function toGreetingForTime() {
    const curTime = new Date().getHours()
    return (curTime>=5 && curTime<=12)? '早上好': (curTime>=12 && curTime<=18)? '下午好': '晚上好'
  } 
  return (
    <div className='work-header'>
      <div className='work-header-userinfo'>
        <div className="userinfo">
          <div className='useravatar'>
            <Avatar size={65} 
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          </div>
          <div className="details">
            <h2 style={{marginBottom: '3px', color: 'var(--font-color)'}}>{toGreetingForTime()}，XXX，祝你开心每一天</h2>
            <div style={{fontSize: '16px'}}>Developer | XX信息公司－技术支撑中心－技术开发部－前端开发工程师</div>
          </div>
        </div>
        <ul className="userrank">
          <li>
            <div className='intro'>项目数</div>
            <h2>04</h2>
          </li>
          <li className='intro'>
            <div className='intro'>排名</div>
            <h2>5/23</h2>
          </li>
          <li className='intro'>
            <div className='intro'>影响力</div>
            <h2>3211</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}
