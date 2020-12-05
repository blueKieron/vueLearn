import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

//1、通过Vue.use（插件）  安装插件
Vue.use(VueRouter)
//配置路由和组件之间的映射关系
const routes = [{
    path: '/',
    //redirect 重定向
    redirect: '/home'
  }, {
    path: '/home',
    meta: {
      title: 'shouye'
    },
    component: () => import('../components/Home.vue'),
    children: [
      //   {
      //   path: '/',
      //   redirect: 'news'
      // }, 
      {
        path: 'news',
        component: () => import('../components/HomeNews.vue')
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage.vue')
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: 'guanyu'
    },
    component: About
  },
  {
    path: '/user/:userId',
    meta: {
      title: 'yonghu'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: 'dangan'
    },
    component: () => import('../components/Profile.vue')
  }
]
//2、创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history',
  //修改活跃对象 类名
  linkActiveClass: 'active'
})

//钩子函数(hook) 前置
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook
  document.title = to.matched[0].meta.title
  next()
})
//后置
router.afterEach()

//3、将router对象传入到Vue实例
export default router