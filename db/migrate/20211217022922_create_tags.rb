class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.string :color, null: false
      t.string :title, null: false

      t.timestamps
    end

    add_index :tags, :title, unique: true 
  end
end
