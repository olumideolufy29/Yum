# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'
NB_USERS = 40
NB_RECETTES = 30

User.create!([
  {
    email: 'william.bout@me.com',
    first_name: 'William',
    password: 'williamyum',
    is_admin: true,
  }
  ])

NB_USERS.times do |n|
  User.create!({
    email: "#{Faker::Internet.email}_#{n}",
    first_name: Faker::Name.first_name,
    password: Faker::Internet.password(8),
    })
    print "\rCreating users... #{n+1}"
  end

print "\n"


NB_RECETTES.times do |n|
  Recette.create!({
    nom: "#{Faker::Lorem.sentence(3, false, 4)}_#{n}",
    baseline: Faker::Lorem.sentence(5, false, 6),
    prep_time: Faker::Number.number(4),
    cooking_time: Faker::Number.number(5),
    image: ["https://c1.staticflickr.com/9/8197/8185539509_b7fa301928_b.jpg",
      "https://c4.staticflickr.com/4/3572/3462052970_73ec775dac_n.jpg",
      "https://c1.staticflickr.com/5/4040/4487647525_7f17f1c167_n.jpg",
      "https://c1.staticflickr.com/5/4011/4434547381_582248cecb_b.jpg",
      "https://c3.staticflickr.com/3/2560/4122479490_80e1e7c856_m.jpg",
      "https://c1.staticflickr.com/9/8214/8403204017_3a56300af7_n.jpg",
      "https://c3.staticflickr.com/7/6005/5875385917_5dc05e590c_n.jpg",
      "https://c4.staticflickr.com/8/7333/12413214585_85573521db_n.jpg"].sample,
    category: [:dessert, :entree, :plat].sample
    })
    print "\rCreating recette... #{n+1}"
  end

  print "\n"
