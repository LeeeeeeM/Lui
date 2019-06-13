<template>
  <div class="loadingbar">
    <button size="small" @click="start">Start</button>
    <button size="small" @click="finish">Finish</button>
    <button size="small" @click="error">Error</button>
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
    }
  }
}
</script>
