import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Iteration2 from '../views/Iteration2.vue'
import Iteration3 from '../views/Iteration3.vue'
import Iteration4 from '../views/Iteration4.vue'
import Iteration5 from '../views/Iteration5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/iteration2',
      name: 'iteration2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Iteration2.vue')
    },
    {
      path: '/iteration3',
      name: 'iteration3',
      component: () => import('../views/Iteration3.vue')
    },
    {
      path: '/iteration4',
      name: 'iteration4',
      component: () => import('../views/Iteration4.vue')
    },
    {
      path: '/iteration5',
      name: 'iteration5',
      component: () => import('../views/Iteration5.vue')
    }
  ]
})

export default router
