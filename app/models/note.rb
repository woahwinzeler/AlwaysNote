class Note < ApplicationRecord
  validates :notebook_id, :title, presence: true 
  validates :title, uniqueness: {scope: :notebook_id, message: "notebook must have notes with a unique title"}

  belongs_to :notebook
  has_and_belongs_to_many :tags

  #TODO: ensure title 
end
