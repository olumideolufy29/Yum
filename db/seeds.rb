# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'
NB_USERS = 40
NB_RECETTES = 40

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
    image: Faker::Avatar.image
    })
    print "\rCreating recette... #{n+1}"
  end

  print "\n"
