const importFn = require.context('./modules/', false, /\.js$/)
let routeModules = []
importFn.keys().forEach(fliePath => {
  routeModules = [...routeModules, ...importFn(fliePath).default]
})

export default [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/moduleA',
    children: [...routeModules]
  }
]
