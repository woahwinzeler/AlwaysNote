import { connect } from 'react-redux'
import { fetchTag, getAllTags, deleteTag, createTag, updateTag} from '../../actions/tags_actions'
import TagActionModal from './tag_action_modal'
import {getNote} from '../../actions/note_actions'

const mSTP = state => ({
  tags: state.entities.tags,
})

const mDTP = dispatch => ({
  updateTag: tag => dispatch(updateTag(tag)),
})

const TagActionModalContainer = connect(mSTP, mDTP)(TagActionModal)
export default TagActionModalContainer; 