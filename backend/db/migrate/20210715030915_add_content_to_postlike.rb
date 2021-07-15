class AddContentToPostlike < ActiveRecord::Migration[6.0]
  def change
    add_column :postlikes, :content, :string

  end
end
