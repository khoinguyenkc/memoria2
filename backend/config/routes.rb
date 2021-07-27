Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope '/api' do
    get 'home' => 'home#index'
    post 'auth_user' => 'authentication#authenticate_user'  
    resources :posts
    resources :comments, only: [:create, :destroy]
    resources :postlikes, only: [:create, :destroy]
    resources :users, only: [:show]

  end

end
