<template>
<header class="lui-header">
  <h1 class="lui-header__title"><small>L-UI</small></h1>
  <div class="lui-nav-handle" @click="toggleMenu()" :class="{'open': isOpen}">
    <div class="lui-nav-handle__container">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
</template>

<script>
export default {
  props: {
    isOpenMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: this.isOpenMenu
    }
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
      this.$emit('openMenu')
    }
  }
}
</script>
