class Tag < ApplicationRecord
  # attr_reader :color 

  has_and_belongs_to_many :notes

  validates :user_id, :color, presence: true
  validates_format_of :color, with: /\A#?(?:[A-F0-9]{3}){1,2}\z/i
  validates :title, uniqueness: {scope: :user_id, 
    message: "user must have unique tag titles."}

  

end
