// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from '@/utils/global' //全局url请求头
import api from './http' //http请求
import store from './store'//vuex
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './lib/style.css'
import './lib/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(api)

import headerMain from './components/headerMain'
import footer from './components/footer'
import sIdentify from './components/identify'
Vue.component('s-identify',sIdentify)
Vue.component('header-main', headerMain)
Vue.component('footer-main', footer)

Vue.config.productionTip = false
Vue.prototype.global = global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
