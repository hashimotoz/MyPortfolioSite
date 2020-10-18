import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home'
import page2 from '@/views/page2'
import page3 from '@/views/page3'
import page4 from '@/views/page4'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3
  },
  {
    path: '/page4',
    name: 'page4',
    component: page4
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
