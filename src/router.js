import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/Home'
import About from './components/About'
import AboutOne from './components/AboutOne'
import AboutTwo from './components/AboutTwo'
import AboutThree from './components/AboutThree'
import Service from './components/Service'
import ServiceDetail from './components/ServiceDetail'
import Hello from './components/Hello'
import NotFoundPage from './components/NotFoundPage'

const routes = [
  {path: '/home', name: 'home', component: Home, alias: '/'},
  {
    path: '/about',
    name: 'about',
    component: About,
    // beforeEnter: (to, from, next) => {
    //   console.log('这是一个路由钩子，进入了about')
    //   console.log(to)
    //   console.log(from)
    //   console.log(next)
    //   next(true)
    // },
    children: [
      {path: '/about/aboutone', component: AboutOne, alias: '/about'},
      {path: '/about/abouttwo', component: AboutTwo},
      {path: '/about/aboutthree', component: AboutThree}
    ]
  },
  {path: '/service', name: 'service', component: Service},
  {path: '/service/:id', name: 'servicedetail', component: ServiceDetail},
  {path: '/hello', name: 'hello', component: Hello},
  {path: '*', component: NotFoundPage}
]

export default new VueRouter({
  // mode: 'history',
  base: '/',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition
  },
  routes
})
