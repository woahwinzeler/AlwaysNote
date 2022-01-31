class Note < ApplicationRecord
  validates :notebook_id, :title, presence: true 
  validates :title, uniqueness: {scope: :notebook_id, message: "notebook must have notes with a unique title"}

  has_and_belongs_to_many :tags

  def tags 
    return NotesTag.where(note_id: self.id)
  end
        
  #TODO: ensure title 
end
