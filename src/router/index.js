import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Categary = () => import('views/categary/Categary')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categary',
    component: Categary
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router