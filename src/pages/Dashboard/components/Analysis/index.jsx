import React from 'react'
import { Outlet } from 'react-router-dom'

function Analysis() {
  return (
    <div>
      Analysis
      <h2>欢迎您，管理员！</h2>
      <h2>Welcome the respect admin!</h2>
      <Outlet />
    </div>
  )
}

export default Analysis
