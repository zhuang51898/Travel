import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 主页时显示Home组件
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      // 城市页时显示City组件
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
