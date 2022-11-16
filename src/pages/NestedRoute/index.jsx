import React, { useEffect, Fragment } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { setSession } from '@/utils/session'
export default function Dashboard() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(()=> {
    if(pathname==='/nested-route' || pathname==='/nested-route/') {
      setSession('curSelectedKeys', '/nested-route/first-route')
      navigate('/nested-route/first-route')
    }
  })
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
