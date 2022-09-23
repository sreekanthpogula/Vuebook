import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

// const router = Router.createRouter({
//   //Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: Router.createWebHashHistory(),
//   router, // short for `routes: routes`
// })
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
      props: {},
      children: [
        {
          path: 'recentchats',
          name: 'Recentchats',
          component: () => import('../components/Recentchats.vue')
        },
        // {
        //   path: '/dashboard/recentchats',
        //   name: 'Recentchats',
        //   component: () => import('../components/Recentchats.vue')
        // },
        {
          path: '/recentphotos',
          name: 'Recentphotos',
          component: () => import('../components/Recentphotos.vue')
        },
        {
          path: '/recentemail',
          name: 'RecentEmails',
          component: () => import('../components/RecentEmails.vue')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../components/About.vue')
        },
      ]
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: () => import('../components/ForgotPassword.vue')
    },
  ],
})