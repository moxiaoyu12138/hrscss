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
    const result = await this.login(data)
    if (result.data.success) {
      context.commit('setToken', result.data.data)
    }
  }
}
export default {
  nemespaced: true,
  state,
  mutations,
  actions
}
