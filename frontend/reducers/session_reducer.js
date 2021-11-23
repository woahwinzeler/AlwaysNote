import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions'

const sessionsReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {CurrentUserId: action.user.id})
    case LOGOUT_USER:
      return Object.assign({}, {currentUserId: null})
    default:
      return oldState
  }
}

export default sessionsReducer;