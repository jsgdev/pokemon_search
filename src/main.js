import Vue from 'vue'
import App from './App.vue'

import PKHeader from './components/Header.vue'
import PKFooter from './components/Footer.vue'

Vue.component('pk-header', PKHeader)
Vue.component('pk-footer', PKFooter)

new Vue({
  el: '#app',
  render: h => h(App)
})
