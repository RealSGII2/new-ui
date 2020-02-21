import PropValidate from '@/utils'

var Color = {
  props: {
    color: {
      type: String,
      default: 'default',
      validate: PropValidate([
        'info',
        'success',
        'warn',
        'error',
        'default',
        'accent',
        'brand'
      ])
    }
  },
  computed: {
    CColor () {
      return `color-${this.color}`
    }
  }
}

export default Color
