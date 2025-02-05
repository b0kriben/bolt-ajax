import { createRouter, createWebHistory } from 'vue-router'
import BoltView from '../views/BoltView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bolt',
      component: BoltView,
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/NewProductView.vue')
    }
  ],
})

export default router
