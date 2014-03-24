class BirdhausController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
        @temp = Reading.limit(10)
        respond_with(@temp) do |format|
            format.html
            format.json {render :json => @temp.as_json}
        end
    end

    def create
        temp = params.require(:birdhau).permit(:sensor_id, :temp, :time)
        @temp = Reading.create(temp)
        if @temp.save
            respond_to do |format|
                format.html
                format.json {render json: @temp}
            end
        end
    end

end
