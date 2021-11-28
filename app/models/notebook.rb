class Notebook < ApplicationRecord
  validates :author_id, :title, presence: true
  validates :title, uniqueness: {scope: :author_id, message: "An Author must have unique notebooks"}
  
  belongs_to :user, 
    foreign_key: :author_id

  has_many :notes 
end
