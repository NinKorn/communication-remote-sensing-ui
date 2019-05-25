import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/gateway'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect:'/home'
    },
    {
      path:'/home',component:home
    }
  ]
})
