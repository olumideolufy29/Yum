class Item < ActiveRecord::Base
  belongs_to :recette
  belongs_to :ingredient
  VALID_MEASURES = %w[oz kg tbsp] # use for "select" tags in forms
  validates :measure, :inclusion => VALID_MEASURES
end
