import { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions"

const errorsReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return []
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState
  }
}

export default errorsReducer;