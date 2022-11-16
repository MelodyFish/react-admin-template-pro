import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class UserStore {
  userInfo = {
    name: '',
    role: '',
  }
  isAuth = false
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {name: 'user', properties: ['userInfo', 'isAuth'], storage: localStorage} )
  }
  setUserInfo(info) {
    this.userInfo = info
  }
  setUserAuth(isAuth) {
    this.isAuth = isAuth
  }
  clearAllInfo() {
    this.userInfo.name = ''
    this.userInfo.role = ''
    this.isAuth = false
  }
}

export default UserStore