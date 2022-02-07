import * as NoteApiUtil from '../util/notes_api_util'
import { receiveTags } from './tags_actions'

export const RECEIVE_NOTE = 'RECEIVE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES'

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
})

const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
})

export const getNote = note => dispatch => (
  //needs to have notebook_id and id 
  NoteApiUtil.fetchNote(note).then(
    (payload) => {
      console.log(payload.note)
      dispatch(receiveNote(payload.note))
      dispatch(receiveTags(payload.tags))
    }
  )
)

export const getAllNotes = notebookId => dispatch => (
  NoteApiUtil.fetchNotes(notebookId).then(
    notes => dispatch(receiveAllNotes(notes))
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
