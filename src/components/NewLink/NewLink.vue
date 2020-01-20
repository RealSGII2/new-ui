<template>
  <a class="new-ui new-link">
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
      class: function () {
        let returned = `new-link--${this.state}`
        return returned
      }
    }
  }
</script>
