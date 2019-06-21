<template>
  <div class="loadingbar">
    <button size="small" @click="start">Start</button>
    <button size="small" @click="finish">Finish</button>
    <button size="small" @click="error">Error</button>
    <button size="small" @click="setSpeed">设置速度</button>
    <button size="small" @click="resetSpeed">重置速度</button>
  </div>
</template>
<script>
export default {
  methods: {
    start () {
      this.$LoadingBar.start()
    },
    finish () {
      this.$LoadingBar.finish()
    },
    error () {
      this.$LoadingBar.error()
    },
    setSpeed () {
      this.$LoadingBar.config({
        speed: 5
      })
    },
    resetSpeed() {
      this.$LoadingBar.config({
        speed: 10
      })
    }
  }
}
</script>
