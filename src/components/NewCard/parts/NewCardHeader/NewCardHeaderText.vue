<template>
  <div class="new-ui new-card__header-text">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NewCardHeaderText',
    data: () => ({
      parentClasses: null
    }),
    mounted () {
      this.parentClasses = this.$parent.$el.classList
      if (this.parentClasses.contains('new-card__header')) {
        this.parentClasses.add('new-card__header-flex')
      }
    },
    beforeDestroy () {
      this.parentClasses.remove('new-card__header-flex')
    }
  }
</script>
