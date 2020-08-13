import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Profile = () => import('../views/profile/Profile')
const ShoppingCart = () => import('../views/shoppingCart/ShoppingCart')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
