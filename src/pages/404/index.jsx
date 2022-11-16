import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.less'

export default function Page404() {
  const location = useLocation()
  const { pathname } = location
  console.log('当前pathname为:', pathname)
  return (
    <div className='page404'>404页面</div>
  )
}
