import { DELETE_NOTE, RECEIVE_ALL_NOTES, RECEIVE_NOTE } from "../actions/note_actions";

const notesReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case DELETE_NOTE:
      let newState = Object.assign({}, oldState)
      delete newState[action.id]
      return newState
    case RECEIVE_NOTE:
      let { note } = action.note
      return Object.assign({}, oldState, note)
    case RECEIVE_ALL_NOTES:
      let { notes } = action.notes
      console.log(notes)
      return Object.assign({}, notes)
    default:
      return oldState
  }
}

export default notesReducer;