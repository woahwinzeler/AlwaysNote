import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

const logoutUser = () => ({
  type: LOGOUT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS, 
  errors
})

export const clearSessionErrors = () => (dispatch) => {
  dispatch(clearErrors())
}

export const signupUser = user => dispatch => (
  SessionApiUtil.createUser(user).then(user => dispatch(receiveCurrentUser(user)))
)

export const loginUser = user => dispatch => (
  SessionApiUtil.createSession(user).then(user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors)))
)

export const logoutCurrentUser = () => dispatch => (
  SessionApiUtil.destroySession().then(() => dispatch(logoutUser()))
)
