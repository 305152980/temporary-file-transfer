export default [
  {
    path: '/moduleB',
    name: 'moduleB',
    component: () => import('@/views/module-b/index.vue')
  }
]
