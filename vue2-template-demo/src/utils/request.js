import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store/index.js'

// 创建一个 Axios 实例。
const instance = axios.create({
  // npm run dev ==> /dev-api   npm run build ==> /prod-api
  baseURL: process.env.VUE_APP_BASE_URL,
  // send cookies when cross-domain requests
  // withCredentials: true,
  // 请求的超时时间。
  timeout: 5000
})

// 请求拦截器。
instance.interceptors.request.use(
  async config => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

// 响应拦截器。
instance.interceptors.response.use(
  response => {
    const { code, message, data } = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (code === 20000) {
      return data
    } else {
      // 50008: Illegal token; 50014: Token expired;
      if (code === 50008 || code === 50014) {
        // to re-login
        MessageBox.confirm(
          '您的登录已过期, 您可以点击取消按钮继续留在当前页, 您也可以点击确定按钮去登录页进行重新登录',
          '登录过期',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      } else {
        Message.error(message)
      }
      return Promise.reject(new Error(message))
    }
  },
  error => {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

// 请求工具函数。
export default (
  url,
  method,
  submitData = {},
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    headers
  })
}
