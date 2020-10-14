Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#home'

  get 'home' => 'home#home'

  resources :algorithms, only: [:show]
  resources :about_us, only: [:index]
end
