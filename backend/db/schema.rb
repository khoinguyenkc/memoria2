# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_28_205606) do

  create_table "activityposts", force: :cascade do |t|
    t.string "content"
    t.integer "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_activityposts_on_post_id"
  end

  create_table "families", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "familymemberships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "family_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["family_id"], name: "index_familymemberships_on_family_id"
    t.index ["user_id"], name: "index_familymemberships_on_user_id"
  end

  create_table "feelingposts", force: :cascade do |t|
    t.string "content"
    t.integer "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_feelingposts_on_post_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "accepter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "picture_albums", force: :cascade do |t|
    t.string "description"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.index ["user_id"], name: "index_picture_albums_on_user_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.string "caption"
    t.string "url"
    t.integer "order_in_album"
    t.integer "order_in_post"
    t.integer "user_id", null: false
    t.integer "picture_album_id", null: false
    t.integer "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["picture_album_id"], name: "index_pictures_on_picture_album_id"
    t.index ["post_id"], name: "index_pictures_on_post_id"
    t.index ["user_id"], name: "index_pictures_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "content"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fullname"
    t.string "avatar"
    t.string "handle"
    t.integer "uid"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "activityposts", "posts"
  add_foreign_key "familymemberships", "families"
  add_foreign_key "familymemberships", "users"
  add_foreign_key "feelingposts", "posts"
  add_foreign_key "picture_albums", "users"
  add_foreign_key "pictures", "picture_albums"
  add_foreign_key "pictures", "posts"
  add_foreign_key "pictures", "users"
  add_foreign_key "posts", "users"
end
