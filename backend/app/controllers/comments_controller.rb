class CommentsController < ApplicationController
    protect_from_forgery with: :null_session

    before_action :authenticate_request!  


    def create
        binding.pry
        @comment = Comment.create(comment_params.merge(user_id: @current_user.id))


        if @comment.save
            render json: {message: 'comment created successfuly'}
        else
            render json: {message: 'comment failed to save'}
        end
    end


    private
    def comment_params
        params.require(:comment).permit(:content, :post_id)
    end

end
