import * as NotebookApiUtil from '../util/notebook_api_util'

export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK'
export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS'
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK'

const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
})

const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
})

const deleteNotebook = id => ({
  type: DELETE_NOTEBOOK,
  id
})

export const getNotebook = id => dispatch => (
  NotebookApiUtil.fetchNotebook(id).then(
    notebook => dispatch(receiveNotebook(notebook)))
)

export const getAllNotebooks = () => dispatch => (
  NotebookApiUtil.fetchNotebooks().then(
    notebooks => dispatch(receiveAllNotebooks(notebooks))
  )
)

export const removeNotebook = id => dispatch => (
  NotebookApiUtil.destroyNotebook(id).then(
    () => dispatch(deleteNotebook(id))
  )
)

export const updateNotebook = notebook => dispatch => (
  NotebookApiUtil.updateNotebook(notebook).then(
    notebook => dispatch(updateNotebook(notebook))
  )
)