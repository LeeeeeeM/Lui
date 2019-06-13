<template>
  <transition name="fade">
    <div class="lui-loading-bar"
      :class="[
        status ? 'lui-loading-bar--' + status : ''
      ]"
      :style="{ height: width + 'px' }"
      v-show="show"
    >
      <div class="lui-loading-bar__inner"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'LuiLoadingBar',
  data () {
    return {
      show: false,
      percent: 0,
      width: 2,
      status: 'success'
    }
  }
}
</script>
