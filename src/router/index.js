import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Details from '../components/Details.vue'
// import VueRouter from 'vue-router'
import consoleRouterGuard from './guards/myFirstguard'
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Men from "../views/Men.vue";
import Women from "../views/Women.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import ProductDetails from "../views/ProductDetails.vue";

// import beforeEach from 'vue-router'
// import  beforeResolve from 'vue-router'
// import afterEach from 'vue-router'
// import onError from  'vue-router'


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
      { path: '/dashboard/recentphotos/details/:id', component: Details, props: true, 
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        console.log('Entering User', to.params.id)
        next()
      },
      // beforeRouteLeave (to, from, next) {
      //   console.log(to)
      //   console.log(from)
      //   console.log('leaving user from',to.params.id)
      //   next();
      // },
     },
      {
        path: '/dashboard/about',
        name: 'About',
        beforeResolve(to, from, next) {
          console.log(to)
          console.log(from)
          console.log('Global -- beforeResolve - fired.')
          next()
        },
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
  {
  path: "/",
  name: "home",
  component: HomePage,
},
{
  path: "/about",
  name: "About",
  component: About,
},
{
  path: "/men",
  name: "Men",
  component: Men,
  props: true,
},
{
  path: "/women",
  name: "Women",
  component: Women,
  props: true,
},
// {
//   path: "/kids",
//   name: "kids",
//   component: kids,
//   props: true,
// },
{
  path: "/search",
  name: "Search",
  component: Search,
  props: true,
},
{
  path: "/checkout",
  name: "Checkout",
  component: Checkout,
  props: true,
},
{
  path: "/shop/:gender/:id",
  name: "ProductDetails",
  component: ProductDetails,
  props: true,
},
{
  path: "/:catchAll(.*)",
  name: "404",
  component: HomePage,
},

];

// 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(consoleRouterGuard)

router.beforeEach((to, from, next) => {
  console.log('Global -- beforeEach - fired')
  console.log(to)
  console.log(from)
  // re-route
  if (to.path === '/dashboard/about') {
    next()
  } 
  // Abort navigation based on some criteria:
  else if (to.path === '/user/1') {
    next()
  } 
  else if (to.path === '/error') {
    const err = new Error('My Error Message')
    
    // pass the error to onError() callback.
    next(err)
  }
  else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log('Global -- beforeResolve - fired.')
  next()
})

router.afterEach((to, from) => {
  console.log(`Global -- afterEach - Just moved from '${from.path}' to '${to.path}'`)
})

router.onError(err => {
  console.error('Handling this error', err.message)
})
export default router;