// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
  // 当执行 npm run dev => .env.development => /api => 跨域代理
  baseURL: process.env.VUE_APP_BASE_API, //  npm run dev => /api | npm run build =>  /prod-api
  timeout: 5000 // 定义超时时间
}
) // 创建一个axios的实例
service.interceptors.request.use(response => {
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
) // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service // 导出axios实例
