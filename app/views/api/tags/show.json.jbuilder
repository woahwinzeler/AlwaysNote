
  @tag.notes.each do |note|
    json.set! note.id do
      json.id note.id 
      json.title note.title 
      json.body note.body
      json.notebook_id note.notebook_id 
      json.tag note.tags.ids
    end
  end
