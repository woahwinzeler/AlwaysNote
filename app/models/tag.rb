class Tag < ApplicationRecord
  has_and_belongs_to_many :notes

  before_validation :ensure_color

  attr_reader :color 

  validates :user_id, :note_id, :color, presence: true
  validates :title, uniqueness: true 

  def ensure_color
    if !color
      self.color = random_color()
    end 
  end


end
