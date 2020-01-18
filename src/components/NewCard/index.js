import NewCard from './NewCard'
import NewCardContent from './NewCardContent/NewCardContent'
import NewCardHeader from './NewCardHeader/NewCardHeader'
import NewCardHeaderText from './NewCardHeader/NewCardHeaderText'

const exported = Vue => {
  Vue.component(NewCard.name, NewCard)
  Vue.component(NewCardContent.name, NewCardContent)
  Vue.component(NewCardHeader.name, NewCardHeader)
  Vue.component(NewCardHeaderText.name, NewCardHeaderText)
}

export default exported
