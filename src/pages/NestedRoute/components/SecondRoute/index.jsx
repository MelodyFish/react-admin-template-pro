import React from 'react'
import { Outlet } from 'react-router-dom'
export default function SecondRoute() {
  return (
    <div>
      第二层菜单1-2
      <Outlet />
    </div>
  )
}
