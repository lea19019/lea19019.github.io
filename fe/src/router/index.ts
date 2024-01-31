/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: ':songName',
        props: route => ({ songName: route.params.songName }),
        component: () => import('@/views/index.vue'),
      },
      {
        path: '',
        props: route => ({ songName: 'ser-parte' }),
        component: () => import('@/views/index.vue'),
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
