json.array!(@recettes) do |recette|
  json.extract! recette, :id, :nom, :baseline
  json.url recette_url(recette, format: :json)
end
