import LoadingBar from './src/loading-bar'

let loadingBarInstance
let timer
let speed = 10

function update (options) {
  if (!loadingBarInstance) {
    loadingBarInstance = LoadingBar.getInstance()
  }
  loadingBarInstance.update(options)
}

function hide () {
  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        percent: 0
      })
    }, 200)
  }, 800)
}

function clearTimer () {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default {
  start () {
    if (timer) return
    let percent = 0
    update({
      percent,
      status: 'success',
      show: true
    })

    timer = setInterval(() => {
      percent += Math.floor((Math.random() * 3) + 6)
      if (percent > 90) {
        clearTimer()
      }
      update({
        percent,
        status: 'success',
        show: true
      })
    }, 1000 / speed)
  },
  finish () {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
    hide()
  },
  error () {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config (options) {
    if ('speed' in options) {
      speed = options.speed
    }
    update(options)
  },
  destroy () {
    clearTimer()
    loadingBarInstance.destroy()
    loadingBarInstance = null
  }
}
