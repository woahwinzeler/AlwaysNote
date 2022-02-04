@tags.each do |tag|
  json.set! tag.id do
    json.title tag.title
    json.color tag.color
  end
end