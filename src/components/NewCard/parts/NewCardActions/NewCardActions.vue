<template>
  <div class="new-card__actions" :class="`md-alignment-${mdAlignment}`">
    <slot />
  </div>
</template>

<script>
  import Validator from 'src/utils/validate'
  const alignments = ['left', 'right', 'space-between']
  export default {
    name: 'NewCardActions',
    props: {
      mdAlignment: {
        type: String,
        default: 'right',
        ...Validator('new-alignment', alignments)
      }
    }
  }
</script>
