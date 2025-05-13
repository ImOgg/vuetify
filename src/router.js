import { createRouter, createWebHistory } from 'vue-router'

// 導入頁面組件
import Home from './views/Home.vue'
import Vuetify from './pages/Vuetify.vue'
import Trasation from './pages/Trasation.vue'
// About 頁面使用懶加載
const About = () => import('./views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/vuetify',
    name: 'vuetify',
    component: Vuetify
  },
  {
    path: '/transition',
    name: 'transition',
    component: Trasation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router