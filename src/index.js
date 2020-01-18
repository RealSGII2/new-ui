import * as Components from './components'

let NewUI = Vue => {
  Object.values(Components).forEach((component) => {
    Vue.use(component)
  })
}

export default NewUI
