class CreateRecettes < ActiveRecord::Migration
  def change
    create_table :recettes do |t|
      t.string :nom
      t.text :baseline
      t.string :category

      t.timestamps
    end
  end
end
