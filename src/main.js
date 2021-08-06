import Vue from 'vue'
import App from './App.vue'


import XX from './packages'
Vue.use(XX)

new Vue({
  el: '#app',
  render: h => h(App)
})

