class CommentsController < ApplicationController
    protect_from_forgery with: :null_session

    before_action :authenticate_request!  


    def create
        main_content = JSON.parse(request.headers["body"])
        post_content = main_content["content"]
        post_id = main_content["post_id"]
        @comment = Comment.create(content: post_content, post_id: post_id, user_id: @current_user.id)
        binding.pry


        if @comment.save
            render json: {message: 'comment created successfuly'}
        else
            render json: {message: 'comment failed to save'}
        end
    end


    # private
    # def comment_params
    #     params.require(:comment).permit(:content, :post_id)
    # end

end
