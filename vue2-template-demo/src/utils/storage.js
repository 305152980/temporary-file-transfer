const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const setItem = (key, value) => {
  if (typeof value === 'object') {
    // 将对象、数组类型的数据转换为 JSON 格式的字符串进行存储。
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

const removeItem = key => {
  window.localStorage.removeItem(key)
}

export default {
  getItem,
  setItem,
  removeItem
}
