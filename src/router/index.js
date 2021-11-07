import { createRouter, createWebHistory } from 'vue-router'
import App from '../../src/App.vue'

const routes = [
  
  {
    path: '/',
    name: 'ButtonOne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ButtonOne.vue'), 
    alias: '/one'
  },
  {
    path: '/two',
    name: 'ButtonTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ButtonTwo.vue')
  },
  {
    path: '/three',
    name: 'ButtonThree',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ButtonThree.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
