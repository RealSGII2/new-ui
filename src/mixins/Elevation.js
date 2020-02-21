import PropValidate from '@/utils'

var Elevation = {
  props: {
    elevation: {
      type: String,
      default: '0',
      validate: PropValidate([
        "0",
        "1",
        "2",
        "3",
        "4"
      ])
    }
  },
  computed: {
    CElevation () {
      return `elevated-${this.elevation}`
    }
  }
}

export default Elevation
