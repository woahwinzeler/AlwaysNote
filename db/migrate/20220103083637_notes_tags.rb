class NotesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :notes_tags, id: false do |t|
      t.belongs_to :notes, null: false
      t.belongs_to :tags, null: false 

      t.timestamps 
    end 
  end
end
