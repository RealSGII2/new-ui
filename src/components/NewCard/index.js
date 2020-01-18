import NewCard from './NewCard'
import NewCardContent from './parts/NewCardContent/NewCardContent'
import NewCardHeader from './parts/NewCardHeader/NewCardHeader'
import NewCardHeaderText from './parts/NewCardHeader/NewCardHeaderText'

const exported = Vue => {
  Vue.component(NewCard.name, NewCard)
  Vue.component(NewCardContent.name, NewCardContent)
  Vue.component(NewCardHeader.name, NewCardHeader)
  Vue.component(NewCardHeaderText.name, NewCardHeaderText)
}

export default exported
