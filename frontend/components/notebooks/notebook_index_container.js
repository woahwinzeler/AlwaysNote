import { connect } from "react-redux";
import { getAllNotebooks, getNotebook, removeNotebook, updateNotebook  } from "../../actions/notebook_actions"
import {getAllNotes} from '../../actions/note_actions'
import { logoutCurrentUser } from "../../actions/session_actions";
import  NotebookIndex from './notebook_index'


const mSTP = ({sessions, entities: {notebooks, users, notes}}) => {
  return {
    notebooks: Object.values(notebooks),
    currentUser: users[sessions.id],
    notes: Object.values(notes)
  }
}
const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  getNotebook: id => dispatch(getNotebook(id)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  removeNotebook: id => dispatch(removeNotebook(id)),
  updateNotebook: notebook => dispatch(updateNotebook(notebook)),
  getAllNotes: notebookId => dispatch(getAllNotes(notebookId))
})

const NotebookIndexContainer = connect(mSTP, mDTP)(NotebookIndex);

export default NotebookIndexContainer; 