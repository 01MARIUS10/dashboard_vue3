import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Pages/Dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard1',
      component: () => import('../views/Pages/Dashboard.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard2',
      component: Dashboard
    }
  ]
})

export default router
