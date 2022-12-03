import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from '@/utils/session'

export default function AuthComponent(props) {
  const { children } = props
  return (
    <Fragment>
      { getLocalStorage('token') ? children: <Navigate to='/login' replace /> }
    </Fragment>
  )
}
