class PostsController < ApplicationController
  protect_from_forgery with: :null_session

    before_action :authenticate_request!  

    def show
        #find post id, check that it belongs to current user
        
        # render json: {#content}
    
      end

      def index

        #this is the hub that deliver different kinds of content based on the specifcations in params
        #ex: user's recent posts, user's post from march 2017, user's friend's recent posts, etc..
        #make sure it checks friendship for security
        #params.timerange
        #use Post model's custom methods to process the params request
        # binding.pry
        @posts = Post.process_request(@current_user, params) 
        render json: @posts
    
    
      end

    
end

