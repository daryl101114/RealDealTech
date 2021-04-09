import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Clients from '../views/Clients.vue'
import Dogs from '../views/Dogs.vue'
import ClientDetails from '../views/ClientDetails.vue'
import DogDetails from '../views/DogDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    //component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
    component: Test
  },
  {    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/clientdetails',
    name: 'ClientDetails',
    component: ClientDetails
  },
  {
    path: '/dogdetails',
    name: 'DogDetails',
    component: DogDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
