<template>
  <div class="new-ui new-card" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NewCard',
    props: {
      interactable: Boolean
    },
    data () {
      return {
        provided: {
          expanded: false
        }
      }
    },
    provide () {
      card: this.provided
    },
    computed: {
      classes () {
        return {
          "interactable": this.interactable
        }
      }
    }
  }
</script>
