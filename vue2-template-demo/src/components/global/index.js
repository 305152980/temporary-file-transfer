// 使用 require 提供的 context 函数，加载指定目录下的所有 index.vue 文件。
// context 函数返回一个 importFn 函数。
// importFn 函数的 keys() 属性的值为这些被指定加载的 index.vue 文件的文件路径数组。
// 遍历文件路径数组，再次使用 importFn 函数根据文件路径导入组件对象。
// 获得组件对象后对其进行全局注册。

// context(目录路径，是否加载子目录，加载文件的正则匹配)
const importFn = require.context('./', true, /^index\.vue$/)

export default {
  install(Vue) {
    importFn.keys().forEach(filePath => {
      const component = importFn(filePath).default
      Vue.component(component.name, component)
    })
  }
}
