
export const fetchTagIndex = (userId)  => (
  $.ajax({
    url: `/api/tags?tag[user_id]=${userId}`, 
    method: 'GET',
  })
)
export const updateTag = (tag) => (
  $.ajax({
    url: `/api/tags`,
    method: 'PATCH',
    data: tag 
  })
)

export const deleteTag = id => (
  $.ajax({
    url:`/api/tags/${id}`,
    method: 'DELETE',
  
  })
)

export const createTag = tag => (
  $.ajax({
    url: `/api/notebooks/${tag.notebook_id}/notes/${tag.note_ids[0]}/tags`,
    method: `POST`,
    data: tag 
  })
)

export const showNotes = tagId => (
  $.ajax({
    url:`/api/tags/${tagId}`,
    method: "GET"
  })
)