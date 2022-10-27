import Vue from 'vue'
// import axios from 'axios'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import vuetify from './plugins/vuetify'


// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')