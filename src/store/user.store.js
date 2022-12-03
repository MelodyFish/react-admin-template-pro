import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class UserStore {
  userInfo = {
    name: '',
    role: '',
  }
  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {name: 'user', properties: ['userInfo', 'isAuth'], storage: localStorage} )
  }
  setUserInfo(info) {
    this.userInfo = info
  }
  clearAllInfo() {
    this.userInfo.name = ''
    this.userInfo.role = ''
  }
}

export default UserStore