class Notebook < ApplicationRecord
  validates :author_id, :title, presence: true
  validates :title, uniqueness: {scope: :author_id, 
    message: "An Author must have unique notebooks"}
  
end
