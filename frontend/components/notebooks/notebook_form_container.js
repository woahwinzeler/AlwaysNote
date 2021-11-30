import NotebookForm from "./notebook_form";
import { connect } from "react-redux";
import { createNotebook } from "../../actions/notebook_actions";


const mSTP = ({sessions}) => ({
  currentUserId: sessions.currentUserId
})
const mDTP = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook))
})

const NotebookFormContainer = connect(null, mDTP)(NotebookForm);

export default NotebookFormContainer; 