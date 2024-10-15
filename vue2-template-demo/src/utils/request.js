import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store/index.js'

const vueConfig = require(`${process.env.BASE_URL}vue-config.js`)

// 创建一个 Axios 实例。
const instance = axios.create({
  // npm run dev ==> /dev-api   npm run build ==> /prod-api
  baseURL: vueConfig.VUE_APP_BASE_API || process.env.VUE_APP_BASE_URL,
  // send cookies when cross-domain requests
  // withCredentials: true,
  // 请求的超时时间。
  timeout: 10000
})

// 请求拦截器。
instance.interceptors.request.use(
  async config => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    if (store.getters.language) {
      config.headers['Accept-Language'] = `Bearer ${store.getters.language}`
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
    // 二进制文件数据直接返回。
    if (response.config.responseType === 'blob' || response.config.responseType === 'arraybuffer') {
      return response.data
    }

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
        ).then(async () => {
          await store.dispatch('user/resetToken')
          location.reload()
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
// request: Function
export default (
  url,
  method, // 'GET' | 'POST' | 'PUT' | 'DELETE'
  transMode, // 'url' | 'body'
  submitData = {},
  otherPropSet = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
) => {
  return instance({
    url,
    method,
    [transMode === 'url' ? 'params' : 'data']: submitData,
    ...otherPropSet
  })
}
