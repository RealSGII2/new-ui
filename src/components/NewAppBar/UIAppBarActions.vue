<template>
  <div class="ui app-bar__actions">
    <slot/>
  </div>
</template>

<script>
  import { Mixins, Items as MixinItems } from '@/mixins'

  export default {
    name: 'ui-appbar-actions',
    mixins: []
  }
</script>
