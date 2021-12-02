import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_NOTEBOOK, DELETE_NOTEBOOK} from "../actions/notebook_actions";

const notebookReducer = (oldState={}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return Object.assign({}, oldState, action.notebooks)
    case RECEIVE_NOTEBOOK:
      return Object.assign({}, {[action.notebook.id]: action.notebook}, oldState)
    case DELETE_NOTEBOOK:
      let newState = Object.assign({}, oldState)
      delete newState[action.id]
      return newState; 
    default:
      return oldState;
  }
}

export default notebookReducer;