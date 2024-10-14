const mockList = []

module.exports = function (app) {
  if (process.env.VUE_APP_MOCK === 'true') {
    mockList.forEach(item => {
      app.use(item.url, (req, res) => {
        item.function(req)
        // 将模拟的数据以 json 格式返回给浏览器。
        res.json(item.result)
      })
    })
  }
}
