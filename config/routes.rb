Rails.application.routes.draw do
  resources :home
  # get '/work', to: 'home#work'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
