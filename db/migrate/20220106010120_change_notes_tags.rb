class ChangeNotesTags < ActiveRecord::Migration[5.2]
  def change
    drop_table :notes_tags
  end
end
