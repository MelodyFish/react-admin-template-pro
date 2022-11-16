/*
 * @Descripttion: 
 * @Author: GuoQiang Yu
 * @Date: 2022-08-10 10:11:49
 */
import { useRoutes } from 'react-router-dom'
import React from 'react'
import routes from './routes'
import './App.css'
import './pages/theme.less'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
