import { connect } from "react-redux";
import {updateNote, getNote, createNote} from '../../actions/note_actions'
import TextEditor from "./text_editor";

const mSTP = ({entities: {notes, notebooks}}, ownProps) => {
  return ({
    notes: notes,
    note: notes[ownProps.noteToOpen],
    noteId: ownProps.noteId,
    notebookId: ownProps.notebookId,
    notebooks: Object.values(notebooks), 
  })
}

const mDTP = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  getNote: note => dispatch(getNote(note)),
  createNote: note => dispatch(createNote(note))

})

const TextEditorContainer = connect(mSTP, mDTP)(TextEditor);

export default TextEditorContainer; 