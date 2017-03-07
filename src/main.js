import Vue from 'vue'
import App from './App'
import router from './router'

// console.log(router)
// router.beforeEach((to, from, next) => {
//   console.log('这是一个全局钩子')
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next(true)
// })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
