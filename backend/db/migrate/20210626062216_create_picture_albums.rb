class CreatePictureAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :picture_albums do |t|
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
