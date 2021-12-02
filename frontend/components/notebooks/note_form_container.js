import NoteForm from "./note_form";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.NotebookId],
  formType: 'Create Post'
})