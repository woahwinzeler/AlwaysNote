class NotesTag < ApplicationRecord
  validates :note_id, :tag_id, presence: true 
  belongs_to :tags
  belongs_to :notes 

  
end
