class NoteTags < ActiveRecord::Migration[5.2]
  def change
    create_table :note_tags do |t|
      t.bigint :tag_id, null: false 
      t.bigint :note_id, null: false 


      t.timestamps
    end
  end
end
