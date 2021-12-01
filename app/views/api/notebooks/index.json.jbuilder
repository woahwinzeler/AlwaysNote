@user.notebooks.each do |notebook|
  json.set! notebook.id do 
    json.title notebook.title
    json.description notebook.description
  end 
end
