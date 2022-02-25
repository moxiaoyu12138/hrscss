// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const service = axios.create({
  // 当执行 npm run dev => .env.development => /api => 跨域代理
  baseURL: process.env.VUE_APP_BASE_API, //  npm run dev => /api | npm run build =>  /prod-api
  timeout: 5000 // 定义超时时间
}
) // 创建一个axios的实例

// 请求拦截器
service.interceptors.request.use(config => {
  // config是配置信息
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config // 必须return
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  }, error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)
export default service // 导出axios实例
