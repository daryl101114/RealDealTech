import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    path: '/clients',
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
