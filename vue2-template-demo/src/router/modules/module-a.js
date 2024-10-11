export default [
  {
    path: '/moduleA',
    name: 'moduleA',
    component: () => import('@/views/module-a/index.vue'),
    hidden: true
  }
]
