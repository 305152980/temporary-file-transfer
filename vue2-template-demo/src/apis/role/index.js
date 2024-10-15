import request from '@/utils/request.js'

export function getRoutesPort(params) {
  return request('/vue-element-admin/routes', 'GET', 'url', params)
}

export function getRolesPort(params) {
  return request('/vue-element-admin/roles', 'GET', 'url', params)
}

export function addRolePort(params) {
  return request('/vue-element-admin/role', 'POST', 'body', params)
}

export function updateRolePort(params) {
  return request('/vue-element-admin/role', 'POST', 'body', params)
}

export function deleteRolePort(params) {
  return request('/vue-element-admin/role', 'GET', 'url', params)
}
