import request from '@/utils/request.js'

export function loginPort(params) {
  return request('/vue-element-admin/user/login', 'POST', 'body', params)
}

export function getInfoPort(params) {
  return request('/vue-element-admin/user/info', 'GET', 'url', params)
}

export function logoutPort(params) {
  return request('/vue-element-admin/user/logout', 'POST', 'url', params)
}
