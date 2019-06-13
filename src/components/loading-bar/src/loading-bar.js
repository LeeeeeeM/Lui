import Vue from 'vue'
import LoadingBar from './loading-bar.vue'

let loadingBar
let div

LoadingBar.getInstance = () => {
  if (loadingBar && div) {
    // singleton
  } else {
    div = document.createElement('div')
    document.body.appendChild(div)

    loadingBar = new Vue({
      render (h) {
        return h(LoadingBar)
      }
    }).$mount(div).$children[0]
  }

  return {
    component: loadingBar,
    update (options) {
      if ('percent' in options) {
        loadingBar.percent = options.percent
      }
      if ('status' in options) {
        loadingBar.status = options.status
      }
      if ('show' in options) {
        loadingBar.show = options.show
      }
    },
    destroy () {
      loadingBar.$destroy()
      loadingBar = null
      document.body.removeChild(div)
    }
  }
}

export default LoadingBar
