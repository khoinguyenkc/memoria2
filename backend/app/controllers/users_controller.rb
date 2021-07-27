class UsersController < ApplicationController
    
    
    
    
    ########################
    # THIS IS NOT FOR LOGIN. for creating a new user!!!!
    #still used.

    
    def create
        @user = User.create(user_params)
        if @user.save
            session[:user_id] = @user.id
            #todo: do initialize work here: create Timeline Photos album,..... etc..
            
            #send  some data down ...
        else
            #message that it failed?!
        end

    end

    def show
        @user = User.find(params[:id]) 
        #should also load related content: feelingpost, photos, comments... serializer?!
        render json: @user.to_json

    end



    private
    def user_params
        params.require(:user).permit(:name, :password, :password_confirmation, :email, :image, :uid)
    end

end

