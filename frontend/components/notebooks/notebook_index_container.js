import { connect } from "react-redux";
import { getAllNotebooks, getNotebook, removeNotebook, updateNotebook  } from "../../actions/notebook_actions"
import {createNote, getAllNotes, removeNote} from '../../actions/note_actions'
import { logoutCurrentUser } from "../../actions/session_actions";
import  NotebookIndex from './notebook_index'
import {updateNote, getNote} from '../../actions/note_actions'
import {updateTag} from '../../actions/tags_actions'


const mSTP = ({sessions, entities: {notebooks, users, notes, tags}}) => {
  return {
    notebooks: Object.values(notebooks),
    currentUser: users[sessions.id],
    notes: notes,
    tags: tags
  }
}
const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  getNotebook: id => dispatch(getNotebook(id)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  removeNotebook: id => dispatch(removeNotebook(id)),
  updateNotebook: notebook => dispatch(updateNotebook(notebook)),
  getAllNotes: notebookId => dispatch(getAllNotes(notebookId)),
  updateNote: note => dispatch(updateNote(note)),
  getNote: note => dispatch(getNote(note)),
  createNote: note => dispatch(createNote(note)),
  deleteNote: note => dispatch(removeNote(note)),
  updateTag: tag => dispatch(updateTag(tag))
})

const NotebookIndexContainer = connect(mSTP, mDTP)(NotebookIndex);

export default NotebookIndexContainer; 