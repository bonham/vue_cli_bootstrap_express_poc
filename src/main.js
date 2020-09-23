import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
