import React, { Fragment } from 'react'
import { useStore } from '../../store/index'

export default function RoleComponent(props) {
  const { children } = props
  const { userStore } = useStore()
  return (
    <Fragment>
      {userStore.userInfo.role === 'admin'? children: <h2>抱歉您无权访问！</h2>}
    </Fragment>
  )
}
