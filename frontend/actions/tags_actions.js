import * as TagApiUtil from '../util/tags_api_util'

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const RECEIVE_TAGS = 'RECEIVE_TAGS'
export const RECEIVE_TAG = 'RECEIVE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
const RECEIVE_NOTE = 'RECEIVE_NOTE'

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
})

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
})

const receiveTag = tag => ({
  type: RECEIVE_TAG, 
  tag 
})

const removeTag = tagId => ({
  type: DELETE_TAG,
  tagId
})

const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
})

export const getAllTags = userId => dispatch => (
  TagApiUtil.fetchTagIndex(userId).then(
    tags => dispatch(receiveAllTags(tags))
  )
)

export const deleteTag = tagId => dispatch => (
  TagApiUtil.deleteTag(tagId).then(
    status => dispatch(removeTag(tagId)))
)

export const fetchTag = tagId => dispatch => (
  TagApiUtil.showNotes(tagId).then(
    notes => dispatch(receiveNote(notes))
  )
)

export const createTag = tag => dispatch => (
  TagApiUtil.createTag(tag).then(tag => 
    dispatch(receiveTag(tag)))
)

export const updateTag = tag => dispatch => (
  TagApiUtil.updateTag(tag).then( 
    tag => dispatch(receiveTag(tag))
  )
)