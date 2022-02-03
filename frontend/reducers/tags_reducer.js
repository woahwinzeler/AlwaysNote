import { RECEIVE_ALL_TAGS, RECEIVE_TAGS, RECEIVE_TAG, DELETE_TAG  } from "../actions/tags_actions";


const tagsReducer = (oldState={}, action) => {
  Object.freeze(oldState)

  switch(action.type){
    case RECEIVE_ALL_TAGS:
      return Object.assign({}, action.tags)
    case RECEIVE_TAGS:
      return Object.assign({}, action.tags)
    case RECEIVE_TAG:
      return Object.assign({}, oldState, action.tag)
    case DELETE_TAG:
      let newState = Object.assign({}, oldState)
      delete newState[action.tagId]
      return newState
    default:
      return oldState
  }
}

export default tagsReducer;