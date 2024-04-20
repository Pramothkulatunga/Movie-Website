import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../HomePage.vue'
import VideoDiscoveryPage from '../VideoDiscoveryPage'
import MyLibrary from '../MyLibrary'
import VideoDetailsPage from '../VideoDetailsPage'
import SignUpPage from '../SignUpPage'
import DashBoard from '../DashBoard'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/VideoDiscoveryPage',
    name: 'VideoDiscoveryPage',
    component: VideoDiscoveryPage
  },
  {
    path: '/MyLibrary',
    name: 'MyLibrary',
    component: MyLibrary
  },
  {
    path: '/VideoDetailsPage',
    name: 'VideoDetailsPage',
    component: VideoDetailsPage
  },
  {
    path: '/SignUpPage',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
