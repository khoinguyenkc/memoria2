class ApplicationController < ActionController::Base

    #how do other controllers get access to this?
    
    def is_logged_in
        #since these are also marked as helper methods, they are availalble in not just all ctronollers (cuz they inherit from appc ontroler) but also avialble to views

        (session[:user_id] && session[:user_id].present? ) ? true : false
    end

    def current_user
        @user = User.find_by(id: session[:user_id])
    end


    def current_email
        #this TRY to initialize, not guranteed.. if user enter an email when they buy, then the email is saved. we'll later use this to help them signup/login
            session[:current_email] = current_user.email if current_user && current_user.email
            session[:current_email] 
    end

    def current_or_dummy_user
        if is_logged_in
            current_user
        else
            User.new(email: "dummy@dummy.com", password: SecureRandom.hex )
        end
    end



    def clear_email
        session.delete :current_email if session[:current_email] 
    end



    















end
