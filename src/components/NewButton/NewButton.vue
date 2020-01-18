<template>
  <button v-bind:class="class">
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
      }
      expanded: {
        type: Boolean,
        default: false
      }
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
      class: function() {
        let returned =  `new-ui new-button new-button--${this.state}--${this.appearance} new-button--${if (this.style!=='default'){this.style}} new-button--${if (this.expanded!==false){'expanded'}}`;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/styles.scss';
</style>
