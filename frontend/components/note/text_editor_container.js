import { connect } from "react-redux";
import {updateNote, getNote} from '../../actions/note_actions'
import TextEditor from "./text_editor";

const mSTP = ({entities: {notes}}, ownProps) => {
  return ({
    notes: notes,
    note: notes[ownProps.noteToOpen],
    noteId: ownProps.noteId,
    notebookId: ownProps.notebookId
  })
}

const mDTP = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  getNote: note => dispatch(getNote(note))

})

const TextEditorContainer = connect(mSTP, mDTP)(TextEditor);

export default TextEditorContainer; 