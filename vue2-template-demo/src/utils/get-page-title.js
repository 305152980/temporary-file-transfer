const title = '项目模板'

// getPageTitle: Function
export default pageTitle => {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
