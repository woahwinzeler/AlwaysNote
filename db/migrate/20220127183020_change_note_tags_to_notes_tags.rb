class ChangeNoteTagsToNotesTags < ActiveRecord::Migration[5.2]
  def change
    rename_table :note_tags, :notes_tags
  end
end
