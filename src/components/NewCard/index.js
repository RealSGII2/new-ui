import NewCard from './NewCard'
import NewCardContent from './parts/NewCardContent/NewCardContent'
import NewCardContentSection from './parts/NewCardContentSection/NewCardContentSection'
import NewCardHeader from './parts/NewCardHeader/NewCardHeader'
import NewCardImage from './parts/NewCardImage/NewCardImage'

const exported = Vue => {
  Vue.component(NewCard.name, NewCard)
  Vue.component(NewCardContent.name, NewCardContent)
  Vue.component(NewCardContentSection.name, NewCardContentSection)
  Vue.component(NewCardHeader.name, NewCardHeader)
  Vue.component(NewCardImage.name, NewCardImage)
}

export default exported
