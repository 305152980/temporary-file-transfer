class DevicePixelRatio {
  // 获取系统的类型。
  _getSystem() {
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
    const agent = navigator.userAgent.toLowerCase()
    if (isMac) {
      return false
    }
    // 现只对 windows 进行处理，其它系统暂无该情况。如有，可继续在此添加。
    if (agent.indexOf('windows') >= 0) {
      return true
    }
  }

  // 监听页面的缩放。
  _watch() {
    const self = this
    self._watchHandler(window, 'resize', function () {
      self._correct()
    })
  }

  // 监听方法的兼容写法。
  _watchHandler(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  }

  // 校正浏览器的缩放比例。
  _correct() {
    // 页面 devicePixelRatio（设备像素比）变化后，修改 body 标签的 zoom 属性值，来抵消 devicePixelRatio 带来的变化。
    document.getElementsByTagName('body')[0].style.zoom = 1 / window.devicePixelRatio
  }

  init() {
    if (this._getSystem()) {
      this._correct()
      // this._watch()
    }
  }
}
export default DevicePixelRatio
