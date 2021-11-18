import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuelidate/nested-validations',
    name: 'Nested Validations',
    component: () => import('../views/vuelidate/NestedValidationsParent.vue')
  },
  {
    path: '/vuelidate/validate-each',
    name: 'ValidateEach',
    component: () => import('../views/vuelidate/ValidateEach.vue')
  },
  {
    path: '/sw/workbox-test',
    name: 'Workbox test',
    component: () => import('../views/sw/WorkboxTest')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
