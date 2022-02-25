import { setToken, getToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken // 初始化vuex的时候就从缓存中读取token
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}
const actions = {
  async login(context, data) {
    const result = await this.login(data) // 拿到token
    context.commit('setToken', result) // 设置token
  }
}
export default {
  nemespaced: true,
  state,
  mutations,
  actions
}
