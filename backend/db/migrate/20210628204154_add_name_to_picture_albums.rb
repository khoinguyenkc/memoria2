class AddNameToPictureAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :picture_albums, :name, :string
  end
end
