import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notification from './components/notification'
// import Tabs from './components/tabs'
// import './assets/styles/global.styl'
Vue.use(Notification)
// Vue.use(Tabs)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
