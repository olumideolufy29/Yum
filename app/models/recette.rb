class Recette < ActiveRecord::Base

  has_many :items
  has_many :ingredients, :through => :items
  has_many :impressions, :as=>:impressionable

  def impression_count
    impressions.size
  end

  has_attached_file :image, :styles => { :blurry => ["800x800>", :jpg], :thumb => ["400x300>", :jpg]},
     :convert_options => { :blurry => "-blur 0x12 -quality 100 -strip"},
     :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  acts_as_likeable

  # this allows things like @recipes = Recipe.using("cucumber")
  scope :using, ->(text) do
    joins(:ingredients).where("ingredients.name LIKE ?", "%#{text}%")
  end
end
