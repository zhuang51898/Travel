import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 主页时显示Home组件
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
