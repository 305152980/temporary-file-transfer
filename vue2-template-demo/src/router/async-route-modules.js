const importFn = require.context('./modules/', false, /\.js$/)
let routerModules = []
importFn.keys().forEach(fliePath => {
  routerModules = [...routerModules, ...importFn(fliePath).default]
})

export default [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/moduleA',
    children: [...routerModules]
  }
]
