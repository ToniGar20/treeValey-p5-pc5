import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Subdivision from '../views/Subdivisions.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

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
    path: '/subdivisions',
    name: 'Subdivisions',
    component: Subdivision,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



