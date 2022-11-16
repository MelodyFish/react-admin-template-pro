import React, { Suspense } from 'react'
import { Spin } from 'antd'

export default function index(props) {
  const { children } = props
  return (
    <Suspense fallback={
      <Spin
        size='large'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    }>
      { children }
    </Suspense>
  )
}
