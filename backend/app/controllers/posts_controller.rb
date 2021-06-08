class PostsController < ApplicationController
    # before_action :authenticate_request!  

    def show
        #find post id, check that it belongs to current user
        
        # render json: {#content}
    
      end

      def index
                #questionL how to request recent vs all posts
        #find all posts belonging to current user, load them in time sequence 

        @posts = Post.all

        render json: @posts
    
    
      end

    
end

