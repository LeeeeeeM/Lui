<template>
  <transition name="lui-alert-fade">
    <div class="lui-alert"
      :class="[
        type ? 'lui-alert--' + type : '',
        description ? 'lui-alert--with-description' : ''
      ]"
      v-show="isShow"
    >
      <i class="icon lui-alert__icon" :class="[ iconClass ]" v-if="showIcon"></i>
      <div class="lui-alert__content">
        <p class="lui-alert__message" v-if="message" v-text="message"></p>
        <p class="lui-alert__description" v-if="description" v-text="description"></p>
      </div>
      <i class="icon lui-alert__close" :class="[
        closeText ? 'lui-alert__close--custom' : 'icon-cancel'
      ]" v-show="closable" @click="close" v-text="closeText"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AtAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: '',
      required: true
    },
    description: String,
    closable: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closeText: String,
    icon: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    iconClass () {
      const classArr = {
        'success': 'icon-success',
        'error': 'icon-error',
        'warning': 'icon-warning',
        'info': 'icon-info'
      }
      return classArr[this.icon] || this.icon
    }
  },
  methods: {
    close () {
      this.isShow = false
      this.$emit('close')
    }
  }
}
</script>
