import { connect } from 'react-redux'
import NewTagModal from './new_tag_modal'
import { createTag } from '../../actions/tags_actions'


const mSTP = state => ({
  notes: state.entities.notes, 
  userId: state.sessions.CurrentUserId,
  notebooks: state.entities.notebooks
})

const mDTP = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
})

const NewTagModalContainer = connect(mSTP, mDTP)(NewTagModal)
export default NewTagModalContainer; 