class RecettesController < InheritedResources::Base

	before_filter :log_impression, :only=> [:show]

def log_impression
  @recette = Recette.find(params[:id])
  @recette.impressions.create(ip_address: request.remote_ip)
end

  private

    def recette_params
      params.require(:recette).permit(:nom, :baseline, :image)
    end
end
