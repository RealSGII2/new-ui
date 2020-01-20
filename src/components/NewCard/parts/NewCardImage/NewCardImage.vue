<template>
  <div class="new-ui new-card__image">
    <img :src="source"></img>
  </div>
</template>

<script>
  export default {
    name: 'NewCardImage',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>
