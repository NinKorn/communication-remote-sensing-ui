import Vue from 'vue'
import Router from 'vue-router'
import loginReg from '@/pages/loginReg/loginReg.vue'
import login from '@/pages/loginReg/login/login.vue'
import register from '@/pages/loginReg/register/register.vue'

import gateway from '@/pages/gateway/gateway.vue'
import home from '@/pages/gateway/home/home.vue'

import developerCenter from '@/pages/developerCenter/developerCenter.vue'
import resourceDown from '@/pages/developerCenter/resourceDown/resourceDown.vue'
import newService from '@/pages/developerCenter/newService/newService.vue'
import createPro from '@/pages/developerCenter/newService/createPro/createPro.vue'
import serviceUpgrade from '@/pages/developerCenter/newService/serviceUpgrade/serviceUpgrade.vue'

import userCenter from '@/pages/userCenter/userCenter.vue'
import changPass from '@/pages/userCenter/changPass/changPass.vue'

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
            {
              path: '/gateway/developerCenter/newService', component: newService, redirect: '/gateway/developerCenter/newService/createPro',
              children: [
                { path: '/gateway/developerCenter/newService/createPro', component: createPro },
                { path: '/gateway/developerCenter/newService/serviceUpgrade', component: serviceUpgrade }
              ]
            }
          ]
        },
        { path: '/gateway/userCenter', component: userCenter }
      ]
    },
    {
      path: '/loginReg', component: loginReg, redirect: '/loginReg/login',
      children: [
        { path: '/loginReg/login', component: login },
        { path: '/loginReg/register', component: register }
      ]
    },
    {
      path: '/changPass', component: changPass
    }
  ]
})
