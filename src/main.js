/**
  * 
  * @authors luozh
  * @date    2016-07-21 15:08:35
  * @description 主入口模块
  */

import Vue from 'vue'
import Vue_Router from 'vue-router'

import routerMap from './routers.js'
import App from './App.vue'

Vue.use(Vue_Router)

var router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

// 独立出来的路由
routerMap(router)

router.start(App, '#app')