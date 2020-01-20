import NewCard from './NewCard'
import NewCardContent from './NewCardContent'
import NewCardContentSection from './NewCardContentSection'
import NewCardHeader from './NewCardHeader'
import NewCardImage from './NewCardImage'

const exported = Vue => {
  Vue.component(NewCard.name, NewCard),
  Vue.component(NewCardContent.name, NewCardContent),
  Vue.component(NewCardContentSection.name, NewCardContentSection),
  Vue.component(NewCardHeader.name, NewCardHeader),
  Vue.component(NewCardImage.name, NewCardImage)
}

export default exported
