class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.string :caption
      t.string :url
      t.integer :order_in_album
      t.integer :order_in_post
      t.references :user, null: false, foreign_key: true
      t.references :photo_album, null: false, foreign_key: true
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
