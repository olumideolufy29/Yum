class AddAttachmentImageToRecettes < ActiveRecord::Migration
  def self.up
    change_table :recettes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :recettes, :image
  end
end
