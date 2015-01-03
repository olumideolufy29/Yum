class AddTimeToRecettes < ActiveRecord::Migration
  def change
    add_column :recettes, :prep_time, :integer, :default => 0
    add_column :recettes, :cooking_time, :integer, :default => 0
  end
end
