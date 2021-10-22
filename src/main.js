import Vue from 'vue'
import App from './App.vue'

// import Store
import {store} from './vuex'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //injetar a store na instancia Vue para ser renderizado:
  store
}).$mount('#app')
