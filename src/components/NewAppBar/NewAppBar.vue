<template>
  <div class="new-ui new-appbar" :class="[stateClass, {'new-appbar--collapsed': collapsed}]">
    <div class="new-ui new-appbar__menu-button">

    </div>
    <div class="new-ui new-appbar__title">
      <h3 class="new-ui new-appbar__title-content">
        {{ title }}
      </h3>
    </div>
    <div class="new-ui new-appbar__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewAppBar',
    props: {
      title: {
        type: String,
        default: 'My NewUI App'
      },
      state: {
        type: String,
        default: 'default',
        validator: function (value) {
          return ['info', 'success', 'warn', 'error', 'default', 'accent', 'brand'].indexOf(value) !== -1
        }
      },
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      stateClass() {
        return `new-appbar--state-${this.state}`
      }
    }
  }
</script>
