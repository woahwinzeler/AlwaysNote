@tags.each do |tag|
  json.set! tag.id do
    json.id tag.id
    json.title tag.title
    json.color tag.color
    json.note_ids tag.note_ids 
  end
end