class SessionsController < ApplicationController

    def create

            @user = User.find_by(email: params[:user][:email])
            authenticated = @user.try(:authenticate, params[:user][:password])

             if authenticated 
                session[:user_id] = @user.id
                if params[:source] == "force_log_in"
                    redirect_to confirm_order_path
                else #sent from force login
                    redirect_to root_path
                end 

             else        
                # redirect_to new_session_path
                redirect_back fallback_location: new_session_path, notice: "Could not verify login. Please try again"

             end



    end

    def destroy
        session.delete :user_id if session[:user_id]

        clear_cart
        clear_order
        clear_email

        redirect_to root_path
    end


    private


end
