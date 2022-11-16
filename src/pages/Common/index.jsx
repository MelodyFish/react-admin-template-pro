import React, { useEffect, Fragment } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { setSession } from '@/utils/session'
export default function Dashboard() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(()=> {
    if(pathname==='/common' || pathname==='/common/') {
      setSession('curSelectedKeys', '/common/table')
      navigate('/common/table')
    }
  })
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
