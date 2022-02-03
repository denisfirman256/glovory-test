import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue Router
Vue.use(VueRouter)

// profle
import Profile from '../views/profile.vue'

const routes = [{
  name: 'Profile',
  path: '/',
  component: Profile
}, ]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  base: process.env.BASE_URL,
  routes
})

export default router