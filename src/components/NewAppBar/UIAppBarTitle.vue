<template>
  <div class="ui app-bar__title">
    <slot/>
  </div>
</template>

<script>
  import { Mixins, Items as MixinItems } from '@/mixins'

  export default {
    name: 'ui-appbar-title',
    mixins: []
  }
</script>
