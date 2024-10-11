import request from '@/utils/request.js'

export function getRoutes(params) {
  return request('/vue-element-admin/routes', 'GET', params)
}

export function getRoles(params) {
  return request('/vue-element-admin/roles', 'GET', params)
}

export function addRole(params) {
  return request('/vue-element-admin/role', 'POST', params)
}

export function updateRole(params) {
  return request('/vue-element-admin/role', 'POST', params)
}

export function deleteRole(params) {
  return request('/vue-element-admin/role', 'GET', params)
}
