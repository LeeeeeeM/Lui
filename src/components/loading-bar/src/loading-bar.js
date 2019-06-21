import Vue from 'vue'
import LoadingBar from './loading-bar.vue'

let wrapComponent
let div

LoadingBar.getInstance = function (options = {}) {
  options = Object.assign({}, {
    status: 'success',
    percent: 0,
    height: 2,
    show: false
  }, options)

  if (!wrapComponent || !div) {
    div = document.createElement('div')
    document.body.appendChild(div)

    // 通过一个wrap包裹进行通信,不要直接修改props
    wrapComponent = new Vue({
      render (h) {
        return h(LoadingBar, {
          props: this.$data
        })
      },
      data () {
        return options
      }
    }).$mount(div)
  }

  return {
    component: wrapComponent,
    update (options) {
      if ('percent' in options) {
        wrapComponent.percent = options.percent
      }
      if ('status' in options) {
        wrapComponent.status = options.status
      }
      if ('show' in options) {
        wrapComponent.show = options.show
      }
      if ('height' in options) {
        wrapComponent.height = options.height
      }
    },
    destroy () {
      wrapComponent && wrapComponent.$destroy()
      wrapComponent = null
      document.body.removeChild(div)
    }
  }
}

export default LoadingBar
