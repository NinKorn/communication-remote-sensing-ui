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

const router = new Router({
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


router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let token = localStorage.getItem('token')
  console.log(to.path);
  if (to.path === '/loginReg/login' || to.path === '/loginReg/register') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (token) {
      next({ path: '/' })
    } else {
      next()
    }
  }else {
    if (!token) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      next()
    }
  }
})



export default router