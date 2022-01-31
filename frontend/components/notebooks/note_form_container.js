import { connect } from "react-redux";
import NoteForm from "./note_form";
import { createNote } from "../../actions/note_actions";
const mSTP = ({sessions, entities: {notebooks, users, notes}}) => {
  return {
    notes: notes,
  }
}

const mDTP = dispatch => ({
  createNote: note => dispatch(createNote(note))
})

const NoteFormContainer = connect(mSTP, mDTP)(NoteForm)
export default NoteFormContainer; 