import * as NoteApiUtil from '../util/notes_api_util'

export const RECEIVE_NOTE = 'RECEIVE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
})

const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

export const getNote = note => dispatch => (
  NoteApiUtil.fetchNote(note).then(
    note => dispatch(receiveNote(note))
  )
)

export const removeNote = note => dispatch => (
  NoteApiUtil.deleteNote(note).then(
    () => dispatch(deleteNote(note.id))
  )
)

export const updateNote = note => dispatch => (
  NoteApiUtil.updateNote(note).then(
    note => dispatch(receiveNote(note))
  )
)

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note).then(
    note => dispatch(receiveNote(note)))
)
