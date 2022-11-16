import React, { useEffect, Fragment } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { setSession } from '@/utils/session'
export default function Dashboard() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(()=> {
    if(pathname==='/dashboard' || pathname==='/dashboard/') {
      setSession('curSelectedKeys', '/dashboard/analysis')
      navigate('/dashboard/analysis')
    }
  })
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
