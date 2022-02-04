json.set! "note" do
  @tag.notes.each do |note|
    json.set! note.id do
      json.title note.title 
      json.body note.body
      json.notebook_id note.notebook_id 
      json.tag true 
    end
  end
end