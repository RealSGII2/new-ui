<template>
  <button v-bind:class="[style]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'NewButton',
    props: {
      style: {
        type: String,
        default: 'default',
        validator: function (value) {
          return ['default', 'pill', 'tile'].indexOf(value) !== -1
        }
      },
      expanded: {
        type: Boolean,
        default: false
      },
      appearance: {
        type: String,
        default: 'text',
        validator: function (value) {
          return ['stroked', 'filled', 'text'].indexOf(value) !== -1
        }
      },
      state: {
        type: String,
        default: 'default',
        validator: function (value) {
          return ['info', 'success', 'warn', 'error', 'default', 'accent', 'brand'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      class: function () {
        let returned = `new-ui new-button new-button--${this.state}--${this.appearance}`
        if (this.expanded == true) {
          returned = returned + ` new-button--expanded`
        }
        if (this.style != "default") {
          returned = returned + ` new-button--${this.style}`
        }
        return returned
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/styles.scss';
</style>
