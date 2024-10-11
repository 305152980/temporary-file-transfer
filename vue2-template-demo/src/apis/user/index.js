import request from '@/utils/request.js'

export function login(params) {
  return request('/vue-element-admin/user/login', 'POST', params)
}

export function getInfo(params) {
  return request('/vue-element-admin/user/info', 'GET', params)
}

export function logout(params) {
  return request('/vue-element-admin/user/logout', 'POST', params)
}
