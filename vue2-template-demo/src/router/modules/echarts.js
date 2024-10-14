export default [
  {
    path: '/mapJs',
    name: 'mapJs',
    component: () => import('@/views/echarts/map-js/index.vue')
  },
  {
    path: '/mapJson',
    name: 'mapJson',
    component: () => import('@/views/echarts/map-json/index.vue')
  }
]
