import UIAppBar from './UIAppBar'
import UIAppBarActions from './UIAppBarActions'
import UIAppBarTitle from './UIAppBarTitle'

const exported = Vue => {
  Vue.component(UIAppBar.name, UIAppBar)
  Vue.component(UIAppBarActions.name, UIAppBarActions)
  Vue.component(UIAppBarTitle.name, UIAppBarTitle)
}

export default exported
