import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import vuetify from './plugins/vuetify'
import './interceptors/axios'



Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')