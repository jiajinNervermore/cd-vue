import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import News from '../components/News'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Index},
  {path:'/news',component:News}
]

const router = new VueRouter({
  routes
})

export default router
