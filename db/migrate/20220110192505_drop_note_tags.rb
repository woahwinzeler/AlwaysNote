class DropNoteTags < ActiveRecord::Migration[5.2]
  def change
    drop_table :note_tags
  end
end
