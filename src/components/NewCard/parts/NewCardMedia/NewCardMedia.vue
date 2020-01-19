<template>
  <div class="new-card-media" :class="mediaClasses">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'NewCardMedia',
    props: {
      mdRatio: {
        type: String,
        validator: function (value) {
          return ['16-9',
          '16/9',
          '16:9',
          '4-3',
          '4/3',
          '4:3',
          '1-1',
          '1/1',
          '1:1'].indexOf(value) !== -1
        }
      },
      mediaMedium: Boolean,
      mediaBig: Boolean
    },
    computed: {
      mediaClasses () {
        let classes = {}
        if (this.mdRatio) {
          const ratio = this.getAspectRatio()
          if (ratio) {
            const [horiz, vert] = ratio
            classes[`media-ratio-${horiz}-${vert}`] = true
          }
        }
        if (this.mdMedium || this.mdBig) {
          classes = {
            'media-medium': this.mediaMedium,
            'media-big': this.mediaBig
          }
        }
        return classes
      }
    },
    methods: {
      getAspectRatio () {
        let ratio = []
        if (this.mediaRatio.indexOf(':') !== -1) {
          ratio = this.mediaRatio.split(':')
        } else if (this.mediaRatio.indexOf('/') !== -1) {
          ratio = this.mediaRatio.split('/')
        } else if (this.mediaRatio.indexOf('-') !== -1) {
          ratio = this.mediaRatio.split('-')
        }
        return ratio.length === 2 ? ratio : null
      }
    }
  }
</script>
