<template>
  <div class="new-card__media-cover" :class="coverClasses">
    <slot />
    <div class="new-card__backdrop" :style="coverStyles" v-if="textScrim" ref="backdrop"></div>
  </div>
</template>

<script>
  export default {
    name: 'NewCardMediaCover',
    props: {
      textScrim: Boolean,
      solid: Boolean
    },
    data: () => ({
      backdropBackground: {}
    }),
    computed: {
      coverClasses () {
        return {
          'text-scrim': this.textScrim,
          'solid': this.solid
        }
      },
      coverStyles () {
        return {
          background: this.backdropBackground
        }
      }
    },
    methods: {
      applyScrimColor (darkness) {
        if (this.$refs.backdrop) {
          this.backdropBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`
        }
      },
      applySolidColor (darkness) {
        let area = this.$el.querySelector('.new-card-area')
        if (area) {
          area.style.background = `rgba(0, 0, 0, ${darkness})`
        }
      },
      getImageLightness (image, onLoad, onError) {
        let canvas = document.createElement('canvas')
        image.crossOrigin = 'Anonymous'
        image.onload = function () {
          let colorSum = 0
          let ctx
          let imageData
          let imageMetadata
          let r
          let g
          let b
          let average
          canvas.width = this.width
          canvas.height = this.height
          ctx = canvas.getContext('2d')
          ctx.drawImage(this, 0, 0)
          imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          imageMetadata = imageData.data
          for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
            r = imageMetadata[x]
            g = imageMetadata[x + 1]
            b = imageMetadata[x + 2]
            average = Math.floor((r + g + b) / 3)
            colorSum += average
          }
          onLoad(Math.floor(colorSum / (this.width * this.height)))
        }
        image.onerror = onError
      }
    },
    mounted () {
      const applyBackground = (darkness = 0.6) => {
        if (this.textScrim) {
          this.applyScrimColor(darkness)
        } else if (this.solid) {
          this.applySolidColor(darkness)
        }
      }
      let image = this.$el.querySelector('img')
      if (image && (this.textScrim || this.solid)) {
        this.getImageLightness(image, (lightness) => {
          let limit = 256
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100
          if (darkness >= 0.7) {
            darkness = 0.7
          }
          applyBackground(darkness)
        }, applyBackground)
      }
    }
  }
</script>
