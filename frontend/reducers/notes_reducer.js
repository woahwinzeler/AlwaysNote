import { DELETE_NOTE, RECEIVE_ALL_NOTES, RECEIVE_NOTE } from "../actions/note_actions";

const notesReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case DELETE_NOTE:
      let newState = Object.assign({}, oldState)
      delete newState[action.id]
      return newState
    case RECEIVE_NOTE:
      return Object.assign({}, action.note, oldState)
    case RECEIVE_ALL_NOTES:
      return Object.assign({}, action.notes)
    default:
      return oldState
  }
}

export default notesReducer;