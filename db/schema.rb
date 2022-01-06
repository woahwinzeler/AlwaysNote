# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_06_010423) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "note_tags", id: false, force: :cascade do |t|
    t.bigint "notes_id"
    t.bigint "tags_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["notes_id"], name: "index_note_tags_on_notes_id"
    t.index ["tags_id"], name: "index_note_tags_on_tags_id"
  end

  create_table "notebooks", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "title", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "title"], name: "index_notebooks_on_author_id_and_title", unique: true
  end

  create_table "notes", force: :cascade do |t|
    t.integer "notebook_id", null: false
    t.string "title", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["notebook_id", "title"], name: "index_notes_on_notebook_id_and_title", unique: true
    t.index ["notebook_id"], name: "index_notes_on_notebook_id"
  end

  create_table "notes_tags", id: false, force: :cascade do |t|
    t.bigint "note_id", null: false
    t.bigint "tag_id", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "color", null: false
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_tags_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
