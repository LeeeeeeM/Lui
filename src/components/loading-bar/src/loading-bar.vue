<template>
  <transition name="fade">
    <div class="lui-loading-bar"
      :class="[
        status ? 'lui-loading-bar--' + status : ''
      ]"
      :style="{ height: height + 'px' }"
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
  props: {
    status: {
      type: String,
      default: 'success'
    },
    percent: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 2
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
