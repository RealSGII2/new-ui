import * as Components from './components'
import './styles/index.scss'

let NewUI = Vue => {
  Object.values(Components).forEach((component) => {
    Vue.use(component)
  })
}

export default NewUI
