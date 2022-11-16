import request from '../../utils/request'

export function login(data) {
  const { username } = data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        role: username,
        name: username==='user'? '萌新用户': '超级管理员',
        // isAuth : true
      })
    }, 2000)
  })
}