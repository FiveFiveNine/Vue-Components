import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/home/index'
import Category from '../view/category/index'
import Shopcart from '../view/shopcart/index'
import Profile from '../view/profile/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes: routes,
  mode: 'history'
})

export default router
