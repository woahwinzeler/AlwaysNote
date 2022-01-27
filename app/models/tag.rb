class Tag < ApplicationRecord
  # attr_reader :color 

  has_and_belongs_to_many :notes

  validates :user_id, :color, presence: true
  validates :title, uniqueness: {scope: :user_id, 
    message: "user must have unique tag titles."}

end
