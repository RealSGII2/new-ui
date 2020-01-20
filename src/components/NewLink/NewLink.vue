<template>
  <a class="new-ui new-link" :class="[linkClass]">
    <slot/>
  </a>
</template>

<script>
  export default {
    name: 'NewLink',
    props: {
      state: {
        type: String,
        default: 'brand',
        validator: function (value) {
          return ['info', 'success', 'warn', 'error', 'secondary', 'brand'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      linkClass: function () {
        let returned = `new-link--${this.state}`
        return returned
      }
    }
  }
</script>
