import { connect } from "react-redux";
import ConfirmationModal from './confirmation_modal'
import { removeNotebook } from "../../actions/notebook_actions"
import {removeNote} from '../../actions/note_actions'


const mSTP = ({sessions, entities: {notebooks, users, notes}}) => {
  return ({
    notes: notes,
    notebooks: notebooks
  })
}

const mDTP = dispatch => ({
  deleteNote: note => dispatch(removeNote(note)),
  deleteNotebook: id => dispatch(removeNotebook(id)),
})

const ConfirmationModalContainer = connect(mSTP, mDTP)(ConfirmationModal);

export default ConfirmationModalContainer; 