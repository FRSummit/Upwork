import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Standings from '../views/Standings.vue'
import Schedules from '../views/Schedules.vue'
import Admin from '../views/Admin.vue'
import About from '../views/About.vue'
import Award from '../views/Award.vue'
import Contact from '../views/Contact.vue'
import Community from '../views/Community.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/standings',
    name: 'Standings',
    component: Standings
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/award',
    name: 'Award',
    component: Award
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
