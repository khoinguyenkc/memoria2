class CreateFeelingposts < ActiveRecord::Migration[6.0]
  def change
    create_table :feelingposts do |t|
      t.string :content
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
