<template>
  <div class="new-card__actions" :class="`md-alignment-${mdAlignment}`">
    <slot />
  </div>
</template>

<script>
  const alignments = ['left', 'right', 'space-between']
  export default {
    name: 'NewCardActions',
    props: {
      mdAlignment: {
        type: String,
        default: 'right',
        validator: function (value) {
          return ['left', 'right', 'space-between'].indexOf(value) !== -1
        }
      }
    }
  }
</script>
