import { connect } from "react-redux";
import { getAllNotebooks, getNotebook, removeNotebook, updateNotebook  } from "../../actions/notebook_actions"
import { logoutCurrentUser } from "../../actions/session_actions";
import  NotebookIndex from './notebook_index'


const mSTP = ({sessions, entities : {notebooks, users}}) => {
  return {
    notebooks: Object.values(notebooks),
    currentUser: users[sessions.id]
  }
}
const mDTP = dispatch => ({
  logout: () => dispatch(logoutCurrentUser()),
  getNotebook: id => dispatch(getNotebook(id)),
  getAllNotebooks: () => dispatch(getAllNotebooks()),
  removeNotebook: id => dispatch(removeNotebook(id)),
  updateNotebook: notebook => dispatch(updateNotebook(notebook))
})

const NotebookIndexContainer = connect(mSTP, mDTP)(NotebookIndex);

export default NotebookIndexContainer; 