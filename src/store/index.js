
import { createContext, useContext } from 'react'
import UserStore from './user.store'

class RootStore {
  constructor() {
    this.userStore = new UserStore()
  }
}
const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => useContext(context)

export { useStore }