json.set! "notes" do
  @tag.notes.each do |note|
    json.id note.id do
      json.title note.title 
      json.body note.body
      json.notebook_id note.notebook_id 
    end
  end
end