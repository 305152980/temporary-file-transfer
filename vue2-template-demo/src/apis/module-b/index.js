import request from '@/utils/request.js'

export function funName(params) {
  return request('', 'POST', params)
}
