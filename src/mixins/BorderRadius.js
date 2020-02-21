import PropValidate from '@/utils'

var BorderRadius = {
  props: {
    border: {
      type: String,
      default: 'base',
      validate: PropValidate([
        "tile",
        "base",
        "vround",
        "rounded"
      ])
    }
  },
  computed: {
    CBorderRadius () {
      return `br-${this.border}`
    }
  }
}

export default BorderRadius
