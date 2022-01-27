class ChangeIndexOnTags < ActiveRecord::Migration[5.2]
  def change
    remove_index :tags, :title
    add_index :tags, [:user_id, :title], unique: true
  end
end
