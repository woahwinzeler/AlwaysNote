import { connect } from 'react-redux'
import NoteList from './note_list'
import {getAllNotes} from '../../actions/note_actions'

const mSTP = state => ({
  notes:  state.entities.notes, 
})

const mDTP = dispatch => ({ 
  getAllNotes: notebookId => dispatch(getAllNotes(notebookId))
})

const NoteListContainer = connect(mSTP, mDTP)(NoteList)

export default NoteListContainer; 