json.set! "notes" do 
    json.set! @note.id do 
      json.id @note.id
      json.notebook_id @note.notebook_id
      json.title @note.title
      json.body @note.body
    end
  end 
  
  json.set! "tags" do 
    if @tags.length > 0
      @tags.each do |tag| 
        json.set! tag.id do 
          json.color tag.color
          json.title tag.title
        end
      end
    end 
  end 