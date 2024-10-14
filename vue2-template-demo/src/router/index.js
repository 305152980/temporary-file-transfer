import Vue from 'vue'
import VueRouter from 'vue-router'

import asyncRouteModules from '@/router/async-route-modules.js'

Vue.use(VueRouter)

/**
 * 注意：子菜单仅在路由的子项长度大于等于1时出现。
 * Note: sub-menu only appear when route children.length >= 1
 *
 *                                如果设置为 true，该项将不会在侧边栏中显示（默认是 false）。
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 *                                如果设置 noRedirect，则在面包屑导航中不会进行重定向。
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * meta : {
                                 控制页面的角色（你可以设置多个角色）。
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
                                 在侧边栏和面包屑导航中显示的名称（建议设置）。
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
                                 指定了在侧边栏中显示的图标。
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
                                 如果设置为 false，该项将在面包屑导航中隐藏（默认是 true）。
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
                                 如果设置了路径，侧边栏将高亮显示你设置的路径。
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  ...asyncRouteModules
  // 404 page must be placed at the end !!!
  // { path: '*', name: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new VueRouter({
    // 开启 history 模式需要服务端的支持。
    // mode: 'history',
    base: process.env.VUE_APP_BASE_ROUTE,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes
  })

// 创建一个 VueRouter 实例。
const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
