class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.references :recette, index: true
      t.references :ingredient, index: true
      t.decimal :amount
      t.string :measure

      t.timestamps
    end
  end
end
