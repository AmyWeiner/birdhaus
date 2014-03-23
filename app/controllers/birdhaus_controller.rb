class BirdhausController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
        @temp = Reading.all
        render json: @temp[0..249]
    end

    def create
        temp = params.require(:birdhau).permit(:sensor_id, :temp, :time)
        @temp = Reading.create(temp)
        if @temp.save
            render json: @temp
        end
    end

end
