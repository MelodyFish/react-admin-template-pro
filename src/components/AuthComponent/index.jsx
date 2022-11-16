import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '@/store'

export default function AuthComponent(props) {
  const { children } = props
  const { userStore } = useStore()
  return (
    <Fragment>
      { userStore.isAuth? children: <Navigate to='/login' replace /> }
    </Fragment>
  )
}
