<template>
  <label class="new-ui new-radio-button__container">{{ label }}
    <input type="radio" checked="checked" name="radio">
    <span class="new-ui new-radio-button__checkmark"></span>
  </label>
</template>

<script>
  export default {
    name: 'NewRadioButton',
    props: {
      label: {
        Type: String,
        Default: 'radio'
      }
    }
  }
</script>
