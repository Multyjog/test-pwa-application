import './styles/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import InitHelper from './lib/InitHelper'
import './registerServiceWorker'

Vue.config.productionTip = false

window.__store = store

InitHelper.init(function() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
