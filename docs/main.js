// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'stylesheet/css/index.scss'
import LoadingBar from 'components/loading-bar'

Vue.config.productionTip = false

function install (Vue) {
  Vue.prototype.$LoadingBar = LoadingBar
}

Vue.use({
  install
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
