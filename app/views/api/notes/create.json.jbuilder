
  json.set! @note.id do 
    json.id @note.id
    json.notebook_id @note.notebook_id
    json.title @note.title
    json.body @note.body
    json.tag []
  end
