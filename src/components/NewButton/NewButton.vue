<template>
  <button class="test">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'NewButton'
  }
</script>

<style lang="scss">
  @import '../../styles/styles.scss';
  .test {
    background-color: #ccffff;
  }
</style>
