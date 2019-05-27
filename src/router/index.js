import Vue from 'vue'
import Router from 'vue-router'
import gateway from '@/pages/gateway'
import home from '@/pages/home'
import loginReg from '@/pages/loginReg'
import login from '@/pages/login'
import register from '@/pages/register'
import developerCenter from '@/pages/developerCenter'
import resourceDown from '@/pages/resourceDown'
import newService from '@/pages/newService'
import createPro from '@/pages/createPro'
import serviceUpgrade from '@/pages/serviceUpgrade'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/gateway'
    },
    {
      path: '/gateway', component: gateway, redirect: '/gateway/home',
      children: [
        { path: '/gateway/home', component: home },
        {
          path: '/gateway/developerCenter', component: developerCenter, redirect: '/gateway/developerCenter/resourceDown',
          children: [
            { path: '/gateway/developerCenter/resourceDown', component: resourceDown },
            { path: '/gateway/developerCenter/newService', component: newService ,redirect: '/gateway/developerCenter/newService/createPro',
          children:[
            { path: '/gateway/developerCenter/newService/createPro', component: createPro},
            { path: '/gateway/developerCenter/newService/serviceUpgrade', component: serviceUpgrade}
          ]}
          ]
        },
      ]
    },
    {
      path: '/loginReg', component: loginReg, redirect: '/loginReg/login',
      children: [
        { path: '/loginReg/login', component: login },
        { path: '/loginReg/register', component: register }
      ]
    }
  ]
})
