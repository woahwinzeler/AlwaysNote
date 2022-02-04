import { connect } from 'react-redux'
import { fetchTag, getAllTags, deleteTag, createTag, updateTag} from '../../actions/tags_actions'
import TagsIndex from './tags_index'
import {getNote} from '../../actions/note_actions'

const mSTP = state => ({
  tags: state.entities.tags,
  userId: state.sessions.CurrentUserId,
  notes: state.entities.notes
})

const mDTP = dispatch => ({
  getAllTags: userId => dispatch(getAllTags(userId)),
  deleteTag: tagId => dispatch(deleteTag(tagId)),
  fetchTagsNotes: tagId => dispatch(fetchTag(tagId)),
  createTag: tag => dispatch(createTag(tag)),
  updateTag: tag => dispatch(updateTag(tag)),
  getNote: note => dispatch(getNote(note)),
})

const TagsIndexContainer = connect(mSTP, mDTP)(TagsIndex)
export default TagsIndexContainer; 