import { DELETE_NOTE, RECEIVE_NOTE } from "../actions/note_actions";

const notesReducer = (oldState, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case DELETE_NOTE:
      let newState = Object.assign({}, oldState)
      delete newState[action.id]
      return newState
    case RECEIVE_NOTE:
      //only one note will be show at a time hence no oldState
      return Object.assign({}, action.note)
    default:
      return oldState
  }
}

export default notesReducer;