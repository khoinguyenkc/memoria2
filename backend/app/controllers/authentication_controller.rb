class AuthenticationController < ApplicationController
  protect_from_forgery with: :null_session
  
  def authenticate_user
    #verify correct email and password to issue a  JWT token

      user = User.find_for_database_authentication(email: params[:email])
      if user 
        if user.valid_password?(params[:password]) #add the if user part otherwise nfound user causes errors
        render json: payload(user)
        else
          render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
        end
      else
        render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
      end
    end
  
    private
  
    def payload(user)
      return nil unless user and user.id
      {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        user: {id: user.id, email: user.email}
      }
    end
  end
  