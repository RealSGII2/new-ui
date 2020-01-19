import NewCard from './NewCard'
import NewCardActions from './parts/NewCardActions/NewCardActions'
import NewCardArea from './parts/NewCardArea/NewCardArea'
import NewCardContent from './parts/NewCardContent/NewCardContent'
import NewCardHeader from './parts/NewCardHeader/NewCardHeader'
import NewCardHeaderText from './parts/NewCardHeader/NewCardHeaderText'
import NewCardMedia from './parts/NewCardMedia/NewCardMedia'
import NewCardMediaCover from './parts/NewCardMedia/NewCardMediaCover'
import NewCardMediaActions from './parts/NewCardMedia/NewCardMediaActions'

const exported = Vue => {
  Vue.component(NewCard.name, NewCard)
  Vue.component(NewCardActions.name, NewCardActions)
  Vue.component(NewCardArea.name, NewCardArea)
  Vue.component(NewCardContent.name, NewCardContent)
  Vue.component(NewCardHeader.name, NewCardHeader)
  Vue.component(NewCardHeaderText.name, NewCardHeaderText)
  Vue.component(NewCardMedia.name, NewCardMedia)
  Vue.component(NewCardMediaCover.name, NewCardMediaCover)
  Vue.component(NewCardMediaActions.name, NewCardMediaActions)
}

export default exported
