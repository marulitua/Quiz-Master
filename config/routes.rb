Rails.application.routes.draw do

  namespace :api do
    namespace :v1, defaults: { format: 'json'} do
      namespace :backend do
        resources :questions
      end
      namespace :frontend do
        resources :questions do
          member do
            patch  :guess
          end
        end
      end
    end
  end

  get "/admin", to: 'backend#index', as: 'admin_backend'
  root to: "frontend#index", as: 'main_home'

end
