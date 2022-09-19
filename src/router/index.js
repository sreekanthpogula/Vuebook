import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import ForgotPassword from '../components/ForgotPassword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: {}
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../components/ForgotPassword.vue')
    }
  ]
})