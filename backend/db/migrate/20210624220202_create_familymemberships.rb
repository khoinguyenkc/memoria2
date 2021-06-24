class CreateFamilymemberships < ActiveRecord::Migration[6.0]
  def change
    create_table :familymemberships do |t|
      t.references :user, null: false, foreign_key: true
      t.references :family, null: false, foreign_key: true

      t.timestamps
    end
  end
end
