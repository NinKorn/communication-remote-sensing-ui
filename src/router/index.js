import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/gateway'
import loginReg from '@/pages/loginReg'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home', component: home
    },
    {
      path: '/loginReg', component: loginReg,redirect:'/loginReg/login',
      children:[
        {path: '/loginReg/login', component: login}
      ]
    }
  ]
})
