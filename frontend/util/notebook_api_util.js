export const fetchNotebooks = () => (
  $.ajax({
    url: '/api/notebooks',
    method: 'GET'
  })
)

export const createNotebook = notebook => (
  $.ajax({
    url: '/api/notebooks',
    method: 'POST',
    data: {notebook}
  })
)

export const fetchNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${id}`,
    method: 'GET'
  })
)

export const updateNotebook = notebook => (
  $.ajax({
    url: `/api/notebooks/${notebook.id}`,
    method: 'PATCH',
    data: {notebook}
  })
)

export const destroyNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${id}`,
    method: 'DELETE'
  })
)