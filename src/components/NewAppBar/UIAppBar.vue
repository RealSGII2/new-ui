<template>
  <div class="ui app-bar" :class="[CColor]">
    <slot/>
  </div>
</template>

<script>
  import { Mixins, Items as MixinItems } from '@/mixins'

  export default {
    name: 'ui-appbar',
    mixins: [MixinItems.Color].push(Mixins)
  }
</script>
