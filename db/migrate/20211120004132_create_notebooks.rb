class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.integer :author_id, null: false 
      t.string :title, null: false
      t.string :description

      t.timestamps
    end
    add_index :notebooks, [:author_id, :title], unique: true 
  end
end
