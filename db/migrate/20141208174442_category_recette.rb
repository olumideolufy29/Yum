class CategoryRecette < ActiveRecord::Migration
  def change
    add_column :recettes, :category, :string
  end
end
