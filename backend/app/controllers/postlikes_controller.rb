class PostlikesController < ApplicationController
    protect_from_forgery with: :null_session

    before_action :authenticate_request!  


    def create
        form_data = JSON.parse(request.headers["body"])
        post_id = form_data["post_id"]

        @post = Post.find(post_id)

        #TODO: prevent duplicate likes 
        if @post.postlikes.where(user_id: @current_user.id).length == 0
            @like = Postlike.create( post_id: post_id, user_id: @current_user.id)
            if @like.save
                render json: {message: 'like created successfuly'}
            end

        else
            render json: {message: 'like failed to save'}
        end


    end


    def destroy
        #unlike 

        #IMPORTANT
        #the URL route expects postlikes/:id to be id of the postlike, but the frontend doesnt know the postlike's id
        #so temporarily we're gonna send the post id through that params[:id]
        #it's guerrilla

        #find the postLIKE
        # binding.pry

        @postlike = Postlike.where(post_id: params[:id], user_id: @current_user.id)[0]

        #delete the postlike
            if @postlike
                @postlike.delete
                render json: {message: 'unlike executed successfuly'}
            else
                render json: {message: 'couldnt find post to unlike'}
            end




    end




end
