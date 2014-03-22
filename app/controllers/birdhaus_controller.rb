class BirdhausController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def index
        @temp1 = Temperature1.all
        respond_to do |format|
            format.html
            format.json {render json: @temp1}
        end
    end

    def create
        temp1 = params.require(:birdhau).permit(:temp, :time)
        @temp1 = Temperature1.create(temp1)
        if @temp1.save
            respond_to do |format|
                format.html
                format.json {render json: @temp1}
            end
        end
    end

    # def temp_params
    #     params.permit(:temp, :time)
    # end

    # def raw_post(action, params, body)
    #     @request.env['RAW_POST_DATA'] = body
    #     response = post(action, params)
    #     @request.env.delete('RAW_POST_DATA')
    #     response
    # end

end
