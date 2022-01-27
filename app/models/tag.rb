class Tag < ApplicationRecord
  # attr_reader :color 

  has_and_belongs_to_many :notes

  validates :user_id, :color, presence: true
  validates :title, uniqueness: {scope: :user_id, 
    message: "user must have unique tag titles."}

  validates :note_ids, length: { minimum: 1}, allow_nil: true 

  def create_note_tags
    next_id = Tag.connection.select_value("Select nextval('tags_id_seq')")
    NotesTag.create!(tag_id: next_id, note_id: self.note_id)
    self.note_id = null; 
  end
end
