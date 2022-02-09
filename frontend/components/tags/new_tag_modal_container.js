import { connect } from 'react-redux'
import NewTagModal from './new_tag_modal'

const mSTP = state => ({
  notes: state.entities.notes
})

const NewTagModalContainer = connect(mSTP, null)(NewTagModal)
export default NewTagModalContainer; 