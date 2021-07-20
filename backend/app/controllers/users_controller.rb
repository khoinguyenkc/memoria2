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


    private
    def user_params
        params.require(:user).permit(:name, :password, :password_confirmation, :email, :image, :uid)
    end

end

