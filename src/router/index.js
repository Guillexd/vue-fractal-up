import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vista-1',
      name: 'firstView',
      component: () => import('../views/FirstView.vue')
    },
    {
      path: '/vista-2',
      name: 'secondView',
      component: () => import('../views/SecondView.vue')
    }
  ]
})

export default router
