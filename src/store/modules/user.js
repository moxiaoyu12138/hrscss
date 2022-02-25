import { setToken, getToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

const state = {
  token: getToken, // 初始化vuex的时候就从缓存中读取token
  UserInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(result) {
    state.UserInfo = result
    // state.UserInfo = { ...result }  属于浅拷贝
  },
  removeUserInfo() {
    state.setUserInfo = {}
  }

}
const actions = {
  async login(context, data) {
    const result = await this.login(data) // 拿到token
    context.commit('setToken', result) // 设置token
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result
  }

}
export default {
  nemespaced: true,
  state,
  mutations,
  actions,
  login
}
