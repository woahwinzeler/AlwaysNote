import { connect } from 'react-redux'
import NewTagModal from './new_tag_modal'
import { createTag } from '../../actions/tags_actions'
import {getAllNotes} from '../../actions/note_actions'


const mSTP = state => ({
  notes: state.entities.notes, 
  userId: state.sessions.CurrentUserId,
  notebooks: state.entities.notebooks
})

const mDTP = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  getAllNotes: notebookId => dispatch(getAllNotes(notebookId))
})

const NewTagModalContainer = connect(mSTP, mDTP)(NewTagModal)
export default NewTagModalContainer; 