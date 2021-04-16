import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Clients from '../views/Clients.vue'
import Stays from '../views/Stays.vue'
import Dogs from '../views/Dogs.vue'
import ClientDetails from '../views/ClientDetails.vue'
import DogDetails from '../views/DogDetails.vue'
import AddClient from '../views/AddClient.vue'
import AddDog from '../views/AddDog.vue'
import AddStay from '../views/AddStay.vue'
import UpdateClient from '../views/UpdateClient.vue'
import UpdateDog from '../views/UpdateDog.vue'
import UpdateStay from '../views/UpdateStay.vue'
import StayDetails from '../views/StayDetails.vue'
import Login from '../views/Login.vue'
import ReportCard from '../views/ReportCard'
import ReportCardPage from '../views/ReportCardPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
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
    path: '/dev',
    name: 'Test',
    //component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
    component: Test
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
    path: '/clientdetails/:id',
    name: 'ClientDetails',
    component: ClientDetails
  },
  {
    path: '/dogdetails/:id',
    name: 'DogDetails',
    component: DogDetails
  },
  {
    path: '/stays',
    name: 'Stays',
    component: Stays
  },
  {
    path: '/addclient',
    name: 'AddClient',
    component: AddClient
  },
  {
    path: '/addDog',
    name: 'AddDog',
    component: AddDog
  },
  {
    path: '/addStay',
    name: 'AddStay',
    component: AddStay
  },
  {
    path: '/updateClient/:id',
    name: 'UpdateClient',
    component: UpdateClient
  },
  {
    path: '/updateDog/:id',
    name: 'UpdateDog',
    component: UpdateDog
  },
  {
    path: '/updateStay/:id',
    name: 'UpdateStay',
    component: UpdateStay
  },
  {
    path: '/stayDetails/:id',
    name: 'StayDetails',
    component: StayDetails
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/reportCard',
    name: 'ReportCard',
    component: ReportCard
  },
  {
    path: '/reportCardPage/:id',
    name: 'ReportCardPage',
    component: ReportCardPage
  }
]

const router = new VueRouter({
  routes
})

export default router
