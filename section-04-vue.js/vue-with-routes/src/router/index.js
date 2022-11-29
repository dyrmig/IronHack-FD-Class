import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConditionalRenderView from '../views/ConditionalRender.vue'
import IteratingElements from '../components/basicComponents/IteratingElements.vue'
import IteratingEjemplos from '../components/basicComponents/IteratingEjemplos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConditionalRender.vue')
    },
    {
      path: '/iterating',
      name: 'iterating',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/basicComponents/IteratingElements.vue')
    },
    {
      path: '/iteratingejemplos',
      name: 'iterating ejemplos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/basicComponents/IteratingEjemplos.vue')
    }
  ]
})

export default router
