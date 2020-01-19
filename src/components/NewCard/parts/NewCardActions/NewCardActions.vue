<template>
  <div class="new-card__actions" :class="`md-alignment-${mdAlignment}`">
    <slot />
  </div>
</template>

<script>
  import Validator from '../../../../../utils'
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
