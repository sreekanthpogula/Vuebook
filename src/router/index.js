import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Details from '../components/Details.vue'
import VueRouter from 'vue-router'
import consoleRouterGuard from './guards/myFirstguard'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    props: {},
    children: [
      {
        path: '/dashboard/recentchats',
        name: 'Recentchats',
        component: () => import('../components/Recentchats.vue')
      },
      {
        path: '/dashboard/recentphotos',
        name: 'Recentphotos',
        component: () => import('../components/Recentphotos.vue')
      },
      // dynamic segments start with a colon
      { path: '/dashboard/recentphotos/details/:id', component: Details, props: true},
      {
        path: '/dashboard/about',
        name: 'About',
        component: () => import('../components/About.vue')
      },
      {
        path: '/dashboard/recentemails',
        name: 'RecentEmails',
        component: () => import('../components/RecentEmails.vue')
      },
    ]
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../components/ForgotPassword.vue')
  },
];
const router = new VueRouter({

  routes,
  mode: 'history',

})
router.beforeEach(consoleRouterGuard)
export default router