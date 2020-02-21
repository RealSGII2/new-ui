import BorderRadius from './BorderRadius'
import Elevation from './Elevation'
import Color from './Color'

export default {
  items: {
    BorderRadius,
    Elevation,
    Color
  },
  Mixins: [BorderRadius, Elevation, Color]
}
