import axios from 'axios'
import { message } from 'antd'
import { getSession } from './session'

function request(config) {
  
  const instance = axios.create({
    baseURL: '/api1',
    timeout: 5000
  })
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  instance.interceptors.request.use(config => {
    // do something after sending the network rqeust
    const token = getSession('token')
    if(token) {
      config.headers.Authorization = 'Bearer ' + token
      console.log('Token:', token)
    }
    return config
  }, err => {
    Promise.reject(err)
  })
  instance.interceptors.response.use(res => {
    // do something after getting the responese
    return res.data
  }, err => {
    switch (err.code) {
      case 401:
        message.error('未授权！请重新登录')
        break
      case 500:
        message.error('服务器内部错误，请稍候')
        break
      default:
        break
    }
    Promise.reject(err)
  })
  return instance(config)
}

export default request