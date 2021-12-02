export const updateNote = note => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: "PATCH",
    data: {note}
  })
)

export const fetchNotes = NotebookId => (
  $.ajax({
    url: `/api/notebooks/${NotebookId}/notes`,
    method: 'GET'
  })
)

export const deleteNote = note => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: "DELETE"
  })
)

export const createNote = note => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/`,
    method: "POST",
    data: {note}
  })
)

export const fetchNote = note => {
  return $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: "GET"
  })
}