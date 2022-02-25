
import request from '@/utils/request'
/** *
 * 登录接口
 *
*/
export function login(data) {
  // 返回一个promise对象
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

export function logout() {

}

