class CreateFriendships < ActiveRecord::Migration[6.0]
  def change
    create_table :friendships do |t|
      t.integer :requester_id, null: false
      t.integer :accepter_id, null: false
      t.timestamps
    end
  end
end
