// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 懒加载
/* 
  当打包构建应用程序时，JS包会变得非常大，影响页面加载，
  如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被问时才加载对应组件，
  这样就更加高效了
    路由懒加载的主要作用就是讲路由对应的组件打包成一个个的JS代码块
    只有在这个路由北访问时 才加载对应的组件
*/

/* 
  全局导航守卫：监听跳转的过程 在监听函数里面做事情
  声明周期： created() mounted() updated() destroyed()
*/
const Home = () => import('pages/home/Home')
const Category = () => import('pages/category/Category')
const Cart = () => import('pages/cart/Cart')
const Profile = () => import('pages/profile/Profile')
const Detail = () => import('pages/detail/Detail')
// 安装插件
Vue.use(VueRouter)
// 创建VueRouter对象
const routes = [{
  // 重定向 redirect
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
  },
  {
    path: '/detail/:id',
    component: Detail
  }
]
// 配置路由和组件之间的应用关系
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 将router对象传入到vue实例中
export default router
