Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notebooks, except: [:new, :edit] do 
      resources :notes, only: [:create, :destroy, :update, :index, :show] do 
        resource :tags, only: [:create, :destroy, :update, :index, :show, :new]
      end 
    end
  end
end
