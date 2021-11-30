export const updateNote = note => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: "PATCH",
    data: {note}
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

export const fetchNote = note => (
  $.ajax({
    url: `/api/notebooks/${note.notebook_id}/notes/${note.id}`,
    method: "GET"
  })
)