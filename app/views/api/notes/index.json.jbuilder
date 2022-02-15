
json.set! "notes" do
  @notes.each do |note|
    json.set! note.id do 
      json.id note.id
      json.notebook_id note.notebook_id
      json.title note.title
      json.tag note.tags.ids 
    end
  end
end 