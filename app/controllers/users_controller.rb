class UsersController < ApplicationController
  def like
    if params[:likeable_type] == "Recette"
      @likeable = Recette.find(params[:likeable_id])
    end
    current_user.like!(@likeable)
  end
  def unlike
    if params[:likeable_type] == "Recette"
      @likeable = Recette.find(params[:likeable_id])
    end
    current_user.unlike!(@likeable)
  end
end
