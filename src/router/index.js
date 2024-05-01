import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/primary',
      name: 'primary',
      component: () => import('../views/PrimaryView.vue')
    },
    {
      path: '/secondary',
      name: 'secondary',
      component: () => import('../views/SecondaryView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/:postId',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        return { name: '404' }
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
