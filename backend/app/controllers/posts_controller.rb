class PostsController < ApplicationController
  protect_from_forgery with: :null_session

    before_action :authenticate_request!  

    def show
        #find post id, check that user has access to post
        @post = Post.find(params[:id]) 
        #should also load related content: feelingpost, photos, comments... serializer?!
        render json: @post.to_json(:include => [ :pictures])
    
      end

      def index

        #this is the hub that deliver different kinds of content based on the specifcations in params
        #ex: user's recent posts, user's post from march 2017, user's friend's recent posts, etc..
        #make sure it checks friendship for security
        #params.timerange
        #use Post model's custom methods to process the params request
        # SELECT POSTS
        @posts = Post.process_request(@current_user, params) 

        #TRIM DOWN CONTENT
        # data = []
        # @posts.each do | post |
        #   object = {
        #     id: post.id
        #   } 
        # data << object 
        # end

        #SEND PACKAGE
        render json:  @posts


        #GOAL: have this deliver only metadata like id, individual posts will by the SHOW controller
        #serializer is one way to achieve this

    
      end

    
end

