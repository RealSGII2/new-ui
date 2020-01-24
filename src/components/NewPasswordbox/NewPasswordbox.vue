<template>
  <input type="password" class="new-ui new-input" :class="inputClass"/>
</template>

<script>
  export default {
    name: 'NewPasswordbox',
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
      inputClass: function () {
        let returned = `new-input--${this.state}`
        return returned
      }
    }
  }
</script>
