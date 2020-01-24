<template>
  <label class="new-ui new-checkbox__container">{{ label }}
    <input type="radio" checked="checked" name="radio">
    <span class="new-ui new-checkbox__checkmark"></span>
  </label>
</template>

<script>
  export default {
    name: 'NewCheckbox',
    props: {
      label: {
        Type: String,
        Default: 'radio'
      }
    }
  }
</script>
