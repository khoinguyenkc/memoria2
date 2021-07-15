class CreatePhotolikes < ActiveRecord::Migration[6.0]
  def change
    create_table :photolikes do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
