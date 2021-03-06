import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('pages/home/Home')
const Category = () => import('pages/category/Category')
const Cart = () => import('pages/cart/Cart')
const Profile = () => import('pages/profile/Profile')
// 安装插件
Vue.use(VueRouter)
// 创建router
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
