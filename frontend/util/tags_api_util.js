
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

export const createTag = tag => {
  return $.ajax({
    url: `/api/tags`,
    method: `POST`,
    data: tag 
  })
}

export const showNotes = tagId => (
  $.ajax({
    url:`/api/tags/${tagId}`,
    method: "GET"
  })
)