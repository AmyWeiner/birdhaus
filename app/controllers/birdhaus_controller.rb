class BirdhausController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def index
        @temp = Reading.all
        respond_to do |format|
            format.html
            format.json {render json: @temp}
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
