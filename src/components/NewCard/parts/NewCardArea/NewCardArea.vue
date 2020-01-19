<template>
  <div class="new-card__area" :class="areaClasses">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'NewCardArea',
    props: {
      inset: Boolean
    },
    computed: {
      areaClasses () {
        return {
          'new-inset': this.inset
        }
      }
    }
  }
</script>
